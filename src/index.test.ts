import { main } from "./index";

describe("main", () => {
  it("Should return 'Hello World!'", () => {
    const result = main();
    expect(result).toBe("Hello World!");
  });
});
