export function getMediaType(filename: string): string {
  const extension = filename.split('.').pop()?.toLowerCase();
  if (extension === 'mp4') return 'video/mp4';
  if (extension === 'mov') return 'video/mp4';
  if (extension === 'jpg' || extension === 'jpeg') return 'image/jpeg';
  if (extension === 'webp') return 'image/webp';
  if (extension === 'png') return 'image/png';
  if (extension === 'gif') return 'image/gif';
  if (extension === 'svg') return 'image/svg+xml';
  if (extension === 'bmp') return 'image/bmp';
  if (extension === 'tiff' || extension === 'tif') return 'image/tiff';
  if (extension === 'ico') return 'image/x-icon';
  throw new Error(`Unknown file extension: ${extension}`);
}

export const isVideo = (media: string) => typeof (media) === 'string' && getMediaType(media).split('/').shift() === 'video';
export const isImage = (media: string) => typeof (media) === 'string' && getMediaType(media).split('/').shift() === 'image';