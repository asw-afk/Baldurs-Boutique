module.exports = `
  type User {
    id: ID
    username: String
    email: String
    password: String
    characters: [Character]
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
    addCharacter(name: String!, gender: String!, background_id:Int!, race_id:Int!, class_id:Int!): Character
    removeCharacter (id: Int!): Character
  }
`;
