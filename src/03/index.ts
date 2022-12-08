import fs from "fs";

const priorities = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function getDuplicate(first: string[], second: string[]): string {
  let letter = "";

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      letter = first[i];
      break;
    }
  }

  return letter;
}

export function getSameGroupLetter(groups: string[][]): string {
  let letters: string[] = [];
  let letter = "";
  for (let i = 0; i < groups[0].length; i++) {
    let l = groups[0][i];
    for (let j = 1; j < groups.length; j++) {
      if (groups[j].includes(l)) letters.push(l);
    }
    if (letters.length == 2) {
      letter = letters[0];
      break;
    }
    letters = [];
  }
  return letter;
}

export function solver(input: string, part2?: boolean): number {
  input = fs.readFileSync(input, "utf8");

  let sum = 0;
  let group: string[][] = [];
  let count = 0;

  input.split("\n").forEach((rucksack) => {
    if (part2) {
      count++;

      group.push(rucksack.split(""));

      if (count == 3) {
        const letter = getSameGroupLetter(group);
        count = 0;
        group = [];
        sum += priorities.indexOf(letter) + 1;
      }
    } else {
      const firstCompartment = rucksack.slice(0, rucksack.length / 2);
      const secondCompartment = rucksack.replace(firstCompartment, "");
      const letter = getDuplicate(
        firstCompartment.split(""),
        secondCompartment.split("")
      );
      sum += priorities.indexOf(letter) + 1;
    }
  });

  return sum;
}

console.time("runtime");
console.log(solver(__dirname + "/input.txt"));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.txt", true));
console.timeEnd("runtime");
