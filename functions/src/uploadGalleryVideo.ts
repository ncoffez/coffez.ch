import { bucket } from "./firestore";
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

export async function uploadGalleryVideo(request: any) {
  const { videoBase64, name, folder } = request.data;

  const videoBuffer = Buffer.from(videoBase64, 'base64');
  const tempFilePath = path.join(os.tmpdir(), name);

  fs.writeFileSync(tempFilePath, videoBuffer);

  try {
    // Upload the video
    const videoPath = `videos/${folder || 'gallery'}/${name}`;
    await bucket.upload(tempFilePath, {
      destination: videoPath,
      metadata: {
        contentType: 'video/mp4',
      },
    });

    // Make the file public
    await bucket.file(videoPath).makePublic();

    // Return the URL
    return bucket.file(videoPath).publicUrl();
  } finally {
    // Clean up temporary file
    fs.unlinkSync(tempFilePath);
  }
}