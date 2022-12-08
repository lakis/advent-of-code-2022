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

export function solver(input: string, part2?: boolean): number {
  input = fs.readFileSync(input, "utf8");

  let sum = 0;

  input.split("\n").forEach((pair, idx) => {
    const [first, second] = pair.split(",");
    const check = part2
      ? overlaps(first.split("-"), second.split("-"))
      : contains(first.split("-"), second.split("-"));
    sum += check;
  });
  return sum;
}

console.time("runtime");
console.log(solver(__dirname + "/input.txt"));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.txt", true));
console.timeEnd("runtime");
