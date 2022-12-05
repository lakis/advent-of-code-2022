import { calculatePairs, calculatePairsOverlaps } from "./index";

describe("advent of code day 4", () => {
  it("part 1 example", async () => {
    const response = calculatePairs(__dirname + "/input.test.txt");
    expect(response).toBe(2);
  });
  it("part 2 example", async () => {
    const response = calculatePairsOverlaps(__dirname + "/input.test.txt");
    expect(response).toBe(4);
  });
  it("part 1 answer", async () => {
    const response = calculatePairs(__dirname + "/input.txt");
    expect(response).toBe(490);
  });
  it("part 2 answer", async () => {
    const response = calculatePairsOverlaps(__dirname + "/input.txt");
    expect(response).toBe(921);
  });
});
