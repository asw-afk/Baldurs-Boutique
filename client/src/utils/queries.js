import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      characters {
        _id
        name
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      characters {
        _id
        name
        gender
        author
        background
        class
        race
        attributes {
          Strength
          Dexterity
          Intelligence
          Wisdom
          Charisma
        }
      }
    }
  }
`;
