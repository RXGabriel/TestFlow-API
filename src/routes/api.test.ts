import request from "supertest";
import app from "../app";
import { User } from "../models/User";

describe("Testing API", () => {
  let email = "test@jest.com";
  let password = "123456";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it("Should return pong", (done) => {
    request(app)
      .get("/ping")
      .then((response) => {
        expect(response.body.pong).toBeTruthy();
        return done();
      });
  });
  it("Should register a new user", (done) => {
    request(app)
      .post("/register")
      .send(`email=${email}&password=${password}`)
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body).toHaveProperty("id");
        return done();
      });
  });

  it("Should not allow to register a user with an existing email", (done) => {
    request(app)
      .post("/register")
      .send(`email=${email}&password=${password}`)
      .then((response) => {
        expect(response.body.error).not.toBeUndefined();
        return done();
      });
  });

  it("should login", (done) => {
    request(app)
      .post("/login")
      .send(`email=${email}&password=${password}`)
      .then((response) => {
        expect(response.body.status).toBeTruthy();
        return done();
      });
  });

  it("should not login", (done) => {
    request(app)
      .post("/login")
      .send(`email=${email}&password=invalid`)
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body.status).toBeFalsy();
        return done();
      });
  });

  it("should list all users", (done) => {
    request(app)
      .get("/list")
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body.list.length).toBeGreaterThanOrEqual(1);
        expect(response.body.list).toContain(email);
        return done();
      });
  });
});
