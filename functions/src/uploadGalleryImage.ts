import sharp from "sharp";
import { bucket } from "./firestore";
import createResizedImageCopy from "./util/createResizedImageCopy";

export async function uploadGalleryImage(request: any) {
	const { imageBase64, name, folder } = request.data; // Receive Base64
	console.log({ imageBase64, name }); // Verify receipt

	// Decode Base64 to Buffer
	const imageBuffer = Buffer.from(imageBase64, "base64");
	const path = `images/${folder || "events"}/${name}`;
	const resizedBuffer = await createResizedImageCopy(imageBuffer, "original", 900);
	const normalizedBuffer = await sharp(resizedBuffer)
		.rotate() // Auto-rotate based on EXIF
		.toBuffer();
	await bucket.file(path).save(normalizedBuffer);
	await bucket.file(path).makePublic();
	return bucket.file(path).publicUrl();
}
