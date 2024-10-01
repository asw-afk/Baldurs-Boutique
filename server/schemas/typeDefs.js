const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]!
  }

  type Character {
    _id: ID
    name: String
    gender: String
    author: String
    race: String
    background: String
    class: String
    attributes: Attribute
  }
  input CharacterInput {
    name: String
    gender: String
    author: String
    race: String
    background: String
    class: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Attribute{
    Strength: Int
    Dexterity: Int
    Intelligence: Int
    Wisdom: Int
    Charisma: Int
    }

  type Query {
    users: [User]
    user(username: String!): User
    characters(username: String): [Character]
    character(characterId: ID!): Character
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharacter(name: String!, gender: String): Character
    removeCharacter(characterId: ID!): Character
    updateCharacter(_id:ID!, name: String, gender: String, author: String, race: String, background: String, class: String):Character
    }
`;

module.exports = typeDefs;
