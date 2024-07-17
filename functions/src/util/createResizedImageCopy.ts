import sharp from "sharp";

export default async function createResizedImageCopy(imageBuffer: Buffer, format: "jpg" | "jpeg" | "webp" | "original", resize: { x: number, y: number } | number | false, qrCode: Buffer | false = false) {
  let pipeline = sharp(imageBuffer);
  if (typeof (resize) === "number") { pipeline = pipeline.resize(resize) }
  if (typeof (resize) === "object") { pipeline = pipeline.resize(resize.x, resize.y) }
  if (format === "jpg" || format === "jpeg") { pipeline = pipeline.jpeg() }
  if (format === "webp") { pipeline = pipeline.webp() }
  if (qrCode) { pipeline = pipeline.composite([{ input: qrCode, gravity: "northeast" }]) }
  return pipeline.toBuffer();
}