import fs from "fs";

// A, X = Rock
// B, Y = Paper
// C, Z = Scissors

const points: Record<string, number> = {
  R: 1,
  P: 2,
  S: 3,
};

const hit: Record<string, string> = {
  A: "R",
  X: "R",
  B: "P",
  Y: "P",
  C: "S",
  Z: "S",
};

const wins = [
  "RP", // Paper beats rock
  "SR", // Rock beats scissors
  "PS", // Scissors beats paper
];

const outcome: Record<string, string> = {
  X: "loss",
  Y: "draw",
  Z: "win",
};

const counterWin: Record<string, string> = {
  A: "Y",
  B: "Z",
  C: "X",
};

const counterLoss: Record<string, string> = {
  A: "Z",
  B: "X",
  C: "Y",
};

// X = lose
// Y = draw
// Z = win

function battle(home: string, away: string, part2?: boolean): number {
  if (part2) {
    if (away == "Y") away = home;
    else if (away == "Z") away = counterWin[home];
    else if (away == "X") away = counterLoss[home];
  }
  if (hit[home] == hit[away]) return 3 + points[hit[away]];
  if (wins.includes(String(hit[home] + hit[away])))
    return 6 + points[hit[away]];
  return points[hit[away]];
}

export function solver(input: string, part2?: boolean) {
  input = fs.readFileSync(input, "utf8");
  let result = 0;
  input.split("\n").forEach((round) => {
    if (round.length == 3) {
      const [home, away] = round.split(" ");
      const battleResult = battle(home, away, part2);
      result = result + battleResult;
    }
  });
  return result;
}

console.time("runtime");
console.log(solver(__dirname + "/input.txt"));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.txt", true));
console.timeEnd("runtime");
