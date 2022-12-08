import { solver } from "./index";

describe("advent of code day 7", () => {
  it("part 1 example", async () => {
    const response = solver(__dirname + "/input.test.txt");
    expect(response).toBe(95437);
  });
  it("part 2 example", async () => {
    const response = solver(__dirname + "/input.test.txt", true);
    expect(response).toBe(24933642);
  });
  it("part 1 answer", async () => {
    const response = solver(__dirname + "/input.txt");
    expect(response).toBe(1543140);
  });
  it("part 2 answer", async () => {
    const response = solver(__dirname + "/input.txt", true);
    expect(response).toBe(1117448);
  });
});
