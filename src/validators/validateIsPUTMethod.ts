export function validateIsPUTMethod(req: { method: string }): boolean {
  if (req.method !== "PUT") {
    return false;
  }
  return true;
}
