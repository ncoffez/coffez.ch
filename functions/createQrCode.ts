import QRCode from "qrcode";
import sharp from "sharp";

export async function createQrCode(url: string) {
  const qrCodeBuffer = await QRCode.toBuffer(url);
  const resizedQrCodeBuffer = await sharp(qrCodeBuffer)
  .resize(100, 100) // adjust these values as needed for your desired size
  .extend({ top: 30, bottom: 30, left: 30, right: 30, background: { r: 255, g: 255, b: 255, alpha: 0.3 } })
  .toBuffer();
  return resizedQrCodeBuffer;
}