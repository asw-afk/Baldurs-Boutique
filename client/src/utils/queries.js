import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    characters {
      _id
      characterName
      characterAuthor
      characterGender
    }
  }
`;

export const QUERY_SINGLE_CHARACTER = gql`
  query getSingleCharacter($characterId: ID!) {
    character(characterId: $characterId) {
      _id
      characterName
      characterAuthor
      characterGender
      skills {
        _id
        skillName
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      id
      username
      email
      password
      characters {
        id
        user_id
        name
        gender
        race {
          id
          name
        }
        subrace {
          id
          name
        }
        class {
          id
          name
        }
        background {
          id
          name
        }
      }
    }
  }
`;
