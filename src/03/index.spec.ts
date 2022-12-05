import { calculatePriorities, calculateGroupPriorities } from "./index";

describe("advent of code day 3", () => {
  it("part 1 example", async () => {
    const response = calculatePriorities(__dirname + "/input.test.txt");
    expect(response).toBe(157);
  });
  it("part 2 example", async () => {
    const response = calculateGroupPriorities(__dirname + "/input.test.txt");
    expect(response).toBe(70);
  });
  it("part 1 answer", async () => {
    const response = calculatePriorities(__dirname + "/input.txt");
    expect(response).toBe(8252);
  });
  it("part 2 answer", async () => {
    const response = calculateGroupPriorities(__dirname + "/input.txt");
    expect(response).toBe(2828);
  });
});
