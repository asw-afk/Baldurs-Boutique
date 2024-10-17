const typeDefs = `
  type User {
    id: ID
    username: String
    email: String
    password: String
    characters: [Character]
  }

  type Character {
    id: ID
    name: String
    gender: String
    user_id: Int
  }

  type Auth {
    token: ID!
    user: User
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
    addCharacter(characterName: String!, characterGender: String!): Character
    removeCharacter(characterId: ID!): Character
  }
`;

module.exports = typeDefs;
