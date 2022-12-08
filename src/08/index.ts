import fs from "fs";

export function solver(input: string, part2?: boolean): number {
  input = fs.readFileSync(input, "utf8");

  let inputRows = input.split("\n");
  let result: number[][] = [];
  let cols: number[][] = [];
  let rows: number[][] = [];
  let resultPart2 = 0;

  inputRows.forEach((r, idx) => {
    rows.push(r.split("").map((val) => Number(val)));
    r.split("").forEach((col, i) => {
      if (!cols[i]) cols[i] = [];
      cols[i][idx] = Number(col);
    });
  });

  inputRows.forEach((r, idx) => {
    const row = r.split("");
    row.forEach((col, i) => {
      if (
        !part2 &&
        (idx == 0 ||
          i == 0 ||
          idx == inputRows.length - 1 ||
          i == row.length - 1)
      )
        result.push([idx, i]);
      else {
        const val = Number(col);
        let c = [...cols[i]];
        let beforeCols = c.splice(0, idx);
        let afterCols = c.splice(1, c.length);
        let r = [...rows[idx]];
        let beforeRows = r.splice(0, i);
        let afterRows = r.splice(1, r.length);

        if (part2) {
          let beforeColsFirstMatch = beforeCols
            .reverse()
            .find((value) => value >= val);
          let beforeRowsFirstMatch = beforeRows
            .reverse()
            .find((value) => value >= val);
          let afterColsFirstMatch = afterCols.find((value) => value >= val);
          let afterRowsFirstMatch = afterRows.find((value) => value >= val);
          let distances = [
            beforeColsFirstMatch
              ? beforeCols.indexOf(beforeColsFirstMatch) + 1
              : beforeCols.length,
            beforeRowsFirstMatch
              ? beforeRows.indexOf(beforeRowsFirstMatch) + 1
              : beforeRows.length,
            afterColsFirstMatch
              ? afterCols.indexOf(afterColsFirstMatch) + 1
              : afterCols.length,
            afterRowsFirstMatch
              ? afterRows.indexOf(afterRowsFirstMatch) + 1
              : afterRows.length,
          ];
          const sum = distances
            .map((val, i) => val)
            .reduce((acc, val) => acc * val, 1);
          resultPart2 = sum > resultPart2 ? sum : resultPart2;
        } else {
          if (val > Math.max(...beforeCols) || val > Math.max(...afterCols)) {
            result.push([idx, i]);
          } else {
            if (val > Math.max(...beforeRows) || val > Math.max(...afterRows)) {
              result.push([idx, i]);
            }
          }
        }
      }
    });
  });

  if (part2) return resultPart2;
  return result.length;
}

// 21

// 4265
// 181440
// 3214400

console.time("runtime");
console.log(solver(__dirname + "/input.test.txt"));
console.timeEnd("runtime");

console.time("runtime");
console.log(solver(__dirname + "/input.test.txt", true));
console.timeEnd("runtime");
