import { CustomMath } from "./Math";

describe("testing the Math lib", () => {
  beforeAll(() => {});
  afterAll(() => {});

  it("should sum two numbers", () => {
    expect(CustomMath.sum(5, 10)).toBe(15);
  });

  it("should subtract two numbers", () => {
    expect(CustomMath.sub(10, 5)).toBe(5);
  });

  it("should divide two numbers", () => {
    expect(CustomMath.div(10, 5)).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(CustomMath.mult(10, 5)).toBe(50);
  });

  it.only("check for properties", () => {
    const response = {
      name: "Gabriel",
      email: "teste@gmail.com",
    };
    expect(response).toHaveProperty("email");
  });
});
