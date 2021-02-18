import { validateDeviceSchema } from "../device";
import { mockedDevice, invalidMockedDevice, expectedErrorFromMockedDevices } from "./data.mock";

describe("Test device validations", () => {
  it("Should validate an right object with no errors", async () => {
    const validatedObject = await validateDeviceSchema(mockedDevice);
    expect(validatedObject.error).toBe(undefined);
  });

  it("Should validate an wrong object with errors", async () => {
    expect.assertions(1);
    try {
      await validateDeviceSchema(invalidMockedDevice);
    } catch (e) {
      expect(e.details).toStrictEqual(expectedErrorFromMockedDevices);
    }
  });
});
