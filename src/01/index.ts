import fs from "fs";

const sortArr = (val: number[]) => {
  return val.sort(function (a: number, b: number) {
    return a - b;
  });
};

export function solver(input: string, part2?: boolean): number {
  input = fs.readFileSync(input, "utf8");

  let elves: number[] = [];
  let elf = 0;

  input.split("\n\n").forEach((row) => {
    elves.push(row.split("\n").reduce((acc, val) => acc + parseInt(val), 0));
  });

  elves = sortArr(elves);

  if (!part2) {
    return elves[elves.length - 1];
  }

  let total = 0;

  for (let i = elves.length - 1; i > elves.length - 4; i--) {
    total = total + elves[i];
  }

  return total;
}

console.time("runtime");
console.log(solver(__dirname + "/input.test.txt"));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.test.txt", true));
console.timeEnd("runtime");
