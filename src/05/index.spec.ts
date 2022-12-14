import { solver } from "./index";

describe("advent of code day 5", () => {
  it("part 1 example", async () => {
    const response = solver(__dirname + "/input.test.txt", false);
    expect(response).toBe("CMZ");
  });
  it("part 2 example", async () => {
    const response = solver(__dirname + "/input.test.txt", true);
    expect(response).toBe("MCD");
  });
  it("part 1 answer", async () => {
    const response = solver(__dirname + "/input.txt", false);
    expect(response).toBe("SHQWSRBDL");
  });
  it("part 2 answer", async () => {
    const response = solver(__dirname + "/input.txt", true);
    expect(response).toBe("CDTQZHBRS");
  });
});
