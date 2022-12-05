import { calculatePoints, calculatePointsPart2 } from "./index";

describe("advent of code day 2", () => {
  it("part 1 example", async () => {
    const response = calculatePoints(__dirname + "/input.test.txt");
    expect(response).toBe(15);
  });
  it("part 2 example", async () => {
    const response = calculatePointsPart2(__dirname + "/input.test.txt");
    expect(response).toBe(12);
  });
  it("part 1 answer", async () => {
    const response = calculatePoints(__dirname + "/input.txt");
    expect(response).toBe(12794);
  });
  it("part 2 answer", async () => {
    const response = calculatePointsPart2(__dirname + "/input.txt");
    expect(response).toBe(14979);
  });
});
