import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter($characterName: String!) {
    addCharacter(characterName: $characterName) {
      _id
      characterName
      characterAuthor
      characterGender
      race_id {
        _id
      }
      background_id {
        _id
      }
      class_id {
        _id
      }
    }
  }
`;
