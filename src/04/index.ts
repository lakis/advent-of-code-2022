import fs from "fs";

function contains(first: string[], second: string[]): number {
  const [firstStart, firstEnd] = first;
  const [secondStart, secondEnd] = second;
  let firstArr: number[] = [];
  let secondArr = [];
  let firstCheck = 0;
  let secondCheck = 0;
  for (let i = Number(firstStart); i <= Number(firstEnd); i++) {
    firstArr.push(i);
  }
  for (let i = Number(secondStart); i <= Number(secondEnd); i++) {
    if (firstArr.includes(i)) firstCheck++;
    secondArr.push(i);
  }

  secondCheck = secondArr.filter((val) => firstArr.includes(val)).length;

  if (firstCheck == firstArr.length || secondCheck == secondArr.length)
    return 1;

  return 0;
}

function overlaps(first: string[], second: string[]): number {
  const [firstStart, firstEnd] = first;
  const [secondStart, secondEnd] = second;
  let firstArr: number[] = [];
  let secondArr = [];
  let check = false;
  for (let i = Number(firstStart); i <= Number(firstEnd); i++) {
    firstArr.push(i);
  }
  for (let i = Number(secondStart); i <= Number(secondEnd); i++) {
    if (firstArr.includes(i)) {
      check = true;
      break;
    }
    secondArr.push(i);
  }

  if (check) return 1;

  return 0;
}

export function calculatePairs(input: string): number {
  input = fs.readFileSync(input, "utf8");

  let sum = 0;

  input.split("\n").forEach((pair, idx) => {
    const [first, second] = pair.split(",");
    const check = contains(first.split("-"), second.split("-"));
    sum += check;
  });
  return sum;
}

export function calculatePairsOverlaps(input: string): number {
  input = fs.readFileSync(input, "utf8");

  let sum = 0;

  input.split("\n").forEach((pair) => {
    const [first, second] = pair.split(",");
    const check = overlaps(first.split("-"), second.split("-"));
    sum += check;
  });
  return sum;
}

let r = calculatePairs(__dirname + "/input.test.txt");

console.time("runtime");
console.log(r);
console.timeEnd("runtime");

r = calculatePairsOverlaps(__dirname + "/input.test.txt");

console.time("runtime");
console.log(r);
console.timeEnd("runtime");
