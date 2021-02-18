import type { HttpFunction } from "@google-cloud/functions-framework/build/src/functions";

import { validateDeviceSchema } from "./validators/device";
import { saveData } from "./services/db";
import { validateIsPUTMethod } from "./validators/validateIsPUTMethod";

export const deviceRegister: HttpFunction = async (req, res) => {
  if (!validateIsPUTMethod(req)) {
    return res.status(404).send();
  }

  try {
    const data = JSON.parse(req.body);

    await validateDeviceSchema(data);

    try {
      const result = await saveData(data);
      return res.status(200).jsonp(result);
    } catch (e) {
      return res.status(400).jsonp({ message: "Error on save in Firestore" });
    }
  } catch (e) {
    return res.status(422).jsonp(e);
  }
};
