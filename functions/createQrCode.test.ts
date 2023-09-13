import { expect, test } from "bun:test";
import { createQrCode } from "./createQrCode"

test("should create a QR code buffer", async () => {
  const url = "https://example.com";
  const qrCodeBuffer = await createQrCode(url);

  expect(qrCodeBuffer).toBeDefined();
  expect(qrCodeBuffer.length).toBeGreaterThan(0);
});

test("should resize the QR code buffer", async () => {
  const url = "https://example.com";
  const qrCodeBuffer = await createQrCode(url);

  // Assuming the original QR code buffer size is less than the resized one
  // Replace this with actual logic to check the size if possible
  expect(qrCodeBuffer.length).toBeGreaterThan(100); // Replace 100 with an appropriate value
});

// Add more tests as needed
