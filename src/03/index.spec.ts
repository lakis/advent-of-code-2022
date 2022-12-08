import { solver } from "./index";

describe("advent of code day 3", () => {
  it("part 1 example", async () => {
    const response = solver(__dirname + "/input.test.txt");
    expect(response).toBe(157);
  });
  it("part 2 example", async () => {
    const response = solver(__dirname + "/input.test.txt", true);
    expect(response).toBe(70);
  });
  it("part 1 answer", async () => {
    const response = solver(__dirname + "/input.txt");
    expect(response).toBe(8252);
  });
  it("part 2 answer", async () => {
    const response = solver(__dirname + "/input.txt", true);
    expect(response).toBe(2828);
  });
});
