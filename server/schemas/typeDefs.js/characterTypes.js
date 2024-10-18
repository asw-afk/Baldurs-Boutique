module.exports = `
type Character {
    id: ID
    user_id: Int
    name: String
    gender: String
    race: Race
    subrace: Subrace
    class:Class
    background:Background
    }

type Race {
    id: ID!
    name: String
    }

type Subrace {
    id: ID!
    race_id: Race!
    name: String
    }

type Class{
    id: ID
    name: String
    }

type Background{
    id: ID!
    name: String
    description:String
    }
    `;
