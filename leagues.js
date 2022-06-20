export const leagues = [
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Balarus",
    teams: [
      { _id: "5b21ca3eeb7f6fbccd471818", name: "ENERGETIK-BGU" },
      { _id: "5b21ca3eeb7f6fbccd471814", name: "FC MINSK" },
      { _id: "5b21ca3eeb7f6fbccd471820", name: "NAFTAN" },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Laliga",
    teams: [
      { _id: "5b21ca3eeb7f6fbccd471818", name: "ENERGETIK-BGU" },
      { _id: "5b21ca3eeb7f6fbccd471814", name: "FC MINSK" },
      { _id: "5b21ca3eeb7f6fbccd471820", name: "NAFTAN" },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "English Premier League",
    teams: [
      { _id: "5b21ca3eeb7f6fbccd471818", name: "ENERGETIK-BGU" },
      { _id: "5b21ca3eeb7f6fbccd471814", name: "FC MINSK" },
      { _id: "5b21ca3eeb7f6fbccd471820", name: "NAFTAN" },
    ],
  },
];

export function getLeagues() {
  return leagues.filter((league) => league);
}
