const matches = [
  {
    _id: "977cd349-b90f-47b3-9985-92a28fa206da",
    league: { _id: "5b21ca3eeb7f6fbccd471820", name: "English Premier League" },
    date: "1/22/2022",
    time: "9:56 PM",
    team1: "United Kingdom",
    team2: "Czech Republic",
  },
  {
    _id: "6902a534-7a97-4b15-859c-9968e272c229",
    league: { _id: "5b21ca3eeb7f6fbccd471818", name: "Balarus" },
    date: "9/22/2021",
    time: "9:31 AM",
    team1: "United Kingdom",
    team2: "Czech Republic",
  },
  {
    _id: "5606a8ca-3b88-43c8-9657-5829e313f333",
    league: { _id: "5b21ca3eeb7f6fbccd471820", name: "English Premier League" },
    date: "4/10/2022",
    time: "8:09 AM",
    team1: "United Kingdom",
    team2: "Czech Republic",
  },
  {
    _id: "fb729124-ea36-46d0-9bf1-0c567ef97687",
    league: { _id: "5b21ca3eeb7f6fbccd471814", name: "Laliga" },
    date: "10/27/2021",
    time: "2:37 PM",
    team1: "United Kingdom",
    team2: "Czech Republic",
  },
];

export function getMatches() {
  return matches;
}

export function getMatch(id) {
  return matches.find((m) => m._id === id);
}

export function deleteMatches(id) {
  let matchInDb = matches.find((m) => m._id === id);
  matches.splice(matches.indexOf(matchInDb), 1);
  return matchInDb;
}
