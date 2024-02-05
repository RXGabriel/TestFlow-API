import { Math } from "./Math";

describe("testing the Math lib", () => {
  it("should sum two numbers", () => {
    expect(Math.sum(5, 10)).toBe(15);
  });

  it("should subtract two numbers", () => {
    expect(Math.sub(10, 5)).toBe(5);
  });

  it("should divide two numbers", () => {
    expect(Math.div(10, 5)).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(Math.mult(10, 5)).toBe(50);
  });
});
