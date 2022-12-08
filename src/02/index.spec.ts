import { solver } from "./index";

describe("advent of code day 2", () => {
  it("part 1 example", async () => {
    const response = solver(__dirname + "/input.test.txt");
    expect(response).toBe(15);
  });
  it("part 2 example", async () => {
    const response = solver(__dirname + "/input.test.txt", true);
    expect(response).toBe(12);
  });
  it("part 1 answer", async () => {
    const response = solver(__dirname + "/input.txt");
    expect(response).toBe(12794);
  });
  it("part 2 answer", async () => {
    const response = solver(__dirname + "/input.txt", true);
    expect(response).toBe(14979);
  });
});
