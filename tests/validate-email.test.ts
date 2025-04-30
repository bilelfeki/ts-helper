import { isMailValid } from "../helpers/validate-email";

describe("isMailValid", () => {
  test("it should return false when the email invalid ", () => {
    let email1 = "hhp.olme.ii";
    expect(isMailValid(email1)).toBe(false);
    let email2 = "hhpolme.com";
    expect(isMailValid(email2)).toBe(false);
  });
  test("it should return true when the valid email provided ", () => {
    let email1 = "hhp@olme.ii";
    expect(isMailValid(email1)).toBe(true);
  });
});
