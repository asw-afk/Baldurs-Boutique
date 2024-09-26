import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_CHARACTER = gql`
  query getCharacters {
    Characters {
      _id
      characterName
    }
  }
`;

export const QUERY_SINGLE_CHARACTER = gql`
  query getSingleCharacter($characterId: ID!) {
    character(characterId: $characterId) {
      _id
      characterName
      thoughtAuthor
      createdAt
      skills {
        _id
        skillName
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      characters {
        _id
        characterName
      }
    }
  }
`;
