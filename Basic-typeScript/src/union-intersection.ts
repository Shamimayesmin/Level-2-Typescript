type NoobDeveloper = {
    name : string;
}

type JuniorDeveloper = NoobDeveloper & {
    
    expertise : string,
    experience : number
}

enum Level {
    junior = "junior",
    mid = "mid",
    senior = 'senior'
}

type NextLevelDeveloper = JuniorDeveloper &{
    leadershipExperience : number;
    level : Level,
}

const newDevelpers : NoobDeveloper | JuniorDeveloper = {
    name : "Habu mia",
    expertise : "JavaScript",
    experience : 1,
}

const developer : NextLevelDeveloper = {
    name : "Next Mia",
    expertise : "Typescript",
    experience : 2,
    leadershipExperience: 1,
    level : Level.mid
}