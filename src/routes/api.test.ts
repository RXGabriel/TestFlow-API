import request from "supertest";
import app from "../app";

describe("Testing API", () => {
  it("Should return pong", (done) => {
    request(app)
      .get("/ping")
      .then((response) => {
        expect(response.body.pong).toBe(true);
        return done();
      });
  });
});
