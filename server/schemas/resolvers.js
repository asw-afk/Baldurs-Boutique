const { User, Character } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("characters");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("characters");
    },
    characters: async (parent, { username }) => {
      return Character.find();
      // .sort({ createdAt: -1 });
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate({
          path: "characters",
          populate: {
            path: "attributes",
          },
        });
        // console.log(user)
        return user;
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.validatePassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addCharacter: async (parent, { name }, context) => {
      if (context.user) {
        const character = await Character.create({
          name,
          author: context.user.username,
          attributes: {},
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { characters: character._id } }
        );

        return character;
      }
      throw AuthenticationError;
    },
    removeCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.findOneAndDelete({
          _id: characterId,
          characterAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { characters: character._id } }
        );

        return character;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
