import admin from "firebase-admin";
import { Device } from "../@types/device";

admin.initializeApp();

const db = admin.firestore();

export function saveData(device: Device): Promise<FirebaseFirestore.WriteResult> {
  const docRef = db.collection("device").doc(device.token);

  return docRef.set(device);
}