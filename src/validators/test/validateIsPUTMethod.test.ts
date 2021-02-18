import express from "express";
import { validateIsPUTMethod } from "../validateIsPUTMethod";
import {
  mockedDELETERequest,
  mockedGETRequest,
  mockedPATCHRequest,
  mockedPOSTRequest,
  mockedPUTRequest,
} from "./data.mock";

describe("Test http request method", () => {
  it("Should validate a PUT http request", () => {
    expect(validateIsPUTMethod(mockedPUTRequest)).toBe(true);
  });
  it("Should invalidate a GET http request", () => {
    expect(validateIsPUTMethod(mockedGETRequest)).toBe(false);
  });
  it("Should invalidate a POST http request", () => {
    expect(validateIsPUTMethod(mockedPOSTRequest)).toBe(false);
  });
  it("Should invalidate a PATCH http request", () => {
    expect(validateIsPUTMethod(mockedPATCHRequest)).toBe(false);
  });
  it("Should invalidate a DELETE http request", () => {
    expect(validateIsPUTMethod(mockedDELETERequest)).toBe(false);
  });
});
