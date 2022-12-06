import fs from "fs";

export function solver(input: string, len: number): number | null {
  input = fs.readFileSync(input, "utf8");

  let response = 0;
  let arr: string[] = [];
  let start = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!arr.includes(char)) {
      arr.push(char);
      if (arr.length == 1) start = i;
      if (arr.length == len) {
        response = i + 1;
        break;
      }
    } else {
      arr = [];
      i = start;
    }
  }

  return response;
}

console.time("runtime");
console.log(solver(__dirname + "/input.txt", 4));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.txt", 14));
console.timeEnd("runtime");
