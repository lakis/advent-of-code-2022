import fs from "fs";

function createStacks(crates: string) {
  let stacks: string[][] = [];

  crates.split("\n").forEach((row) => {
    let arr = row.match(/.{1,4}/g) ?? [];
    arr.forEach((val, idx) => {
      if (!stacks[idx]) stacks[idx] = [];
      if (/\[/gi.test(val)) {
        stacks[idx].push(
          val.replace(/\s/gi, "").replace(/\[/gi, "").replace(/\]/gi, "")
        );
      }
    });
  });

  return stacks;
}

const removeable = ["move", "from", "to"];

function makeMove<T>(stacks: T, moveString: string, part2?: boolean): T {
  let [move, from, to] = moveString
    .split(" ")
    .filter((val) => !removeable.includes(val))
    .map((val) => Number(val));

  from = from - 1;
  to = to - 1;

  let temp = JSON.parse(JSON.stringify(stacks));

  if (!part2) {
    for (let i = 0; i < move; i++) {
      temp[to] = temp[from].splice(0, 1).concat(temp[to]);
    }
  } else {
    temp[to] = temp[from].splice(0, move).concat(temp[to]);
  }

  return temp;
}

function makeMoves(stacks: string[][], moves: string, part2?: boolean): string {
  let message = "";

  moves.split("\n").forEach((move) => {
    stacks = makeMove<string[][]>(stacks, move, part2);
  });

  stacks.forEach((stack) => (message += stack[0]));

  return message;
}

export function getMessage(input: string, part2?: boolean): string {
  input = fs.readFileSync(input, "utf8");

  const [crates, moves] = input.split("\n\n");
  const stacks = createStacks(crates);
  const message = makeMoves(stacks, moves, part2);

  return message;
}

let r = getMessage(__dirname + "/input.txt", false);

console.time("runtime");
console.log(r);
console.timeEnd("runtime");

r = getMessage(__dirname + "/input.txt", true);

console.time("runtime");
console.log(r);
console.timeEnd("runtime");
