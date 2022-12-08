import fs from "fs";

export function solver(input: string, part2?: boolean): number {
  input = fs.readFileSync(input, "utf8");

  let command = "";
  let files: string[] = [];
  let currentPath: string[] = [];
  let parentPath: string[] = [];
  let paths: Record<string, number> = {};
  const rows = input.split("\n");
  rows.forEach((row, idx) => {
    if (/^\$/.test(row)) command = row.replace("$ ", "");

    let [cmd, arg] = command.split(" ");

    if (cmd == "ls") {
      if (/^[0-9]/.test(row)) {
        files.push(row);
      }
    }

    if (/^\$/.test(row) || rows.length - 1 == idx) {
      if (files.length) {
        const size = files.reduce(
          (acc, val) => acc + parseInt(val.split(" ")[0]),
          0
        );
        paths[currentPath.join(",")] = size;
        const copy: string[] = [...parentPath];

        while (copy.length > 0) {
          paths[copy.join(",")] += size;
          copy.pop();
        }
      }
      files = [];
    }

    if (cmd == "cd") {
      if (arg != "..") {
        if (currentPath.length > 0) parentPath = [...currentPath];
        currentPath.push(arg);
        paths[currentPath.join(",")] = 0;
      } else {
        currentPath.pop();
      }
    }
  });

  const filesystemSize = 70000000;
  const minimum = 30000000;
  const required =
    minimum - (filesystemSize - Math.max(...Object.values(paths)));

  if (part2)
    return Math.min(...Object.values(paths).filter((val) => val > required));

  return Object.values(paths)
    .filter((val) => val < 100000)
    .reduce((acc, val) => acc + val, 0);
}

console.time("runtime");
console.log(solver(__dirname + "/input.txt"));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.txt", true));
console.timeEnd("runtime");
