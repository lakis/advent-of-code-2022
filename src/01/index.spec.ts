import { solver } from "./index";

describe("advent of code day 6", () => {
  it("part 1 example", async () => {
    const response = solver(__dirname + "/input.test.txt");
    expect(response).toBe(24000);
  });
  it("part 2 example", async () => {
    const response = solver(__dirname + "/input.test.txt", true);
    expect(response).toBe(45000);
  });
  it("part 1 answer", async () => {
    const response = solver(__dirname + "/input.txt");
    expect(response).toBe(72718);
  });
  it("part 2 answer", async () => {
    const response = solver(__dirname + "/input.txt", true);
    expect(response).toBe(213089);
  });
});
