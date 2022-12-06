import { solver } from "./index";

describe("advent of code day 6", () => {
  it("part 1 example", async () => {
    const response = solver(__dirname + "/input.test.txt", 4);
    expect(response).toBe(7);
  });
  it("part 2 example", async () => {
    const response = solver(__dirname + "/input.test.txt", 14);
    expect(response).toBe(19);
  });
  it("part 1 answer", async () => {
    const response = solver(__dirname + "/input.txt", 4);
    expect(response).toBe(1235);
  });
  it("part 2 answer", async () => {
    const response = solver(__dirname + "/input.txt", 14);
    expect(response).toBe(3051);
  });
});
