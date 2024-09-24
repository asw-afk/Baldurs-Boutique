const { User, Character } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('characters');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('characters');
    },
    characters: async (parent, { username }) => {
      const params = username ? { username } : {};
      return character.find(params).sort({ createdAt: -1 });
    },
    character: async (parent, { characterId }) => {
      return character.findOne({ _id: characterId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('characters');
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

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addCharacter: async (parent, { characterName }, context) => {
      if (context.user) {
        const character = await Character.create({
          characterName,
          characterAuthor: context.user.username,
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
        const character = await character.findOneAndDelete({
          _id: characterId,
          characterAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { character: character._id } }
        );

        return character;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
