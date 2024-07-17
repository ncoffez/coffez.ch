

export interface Resize {
  name: string;
  format: 'original' | 'webp' | 'jpg';
  resize: { x: number, y: number } | number | boolean;
  hasQRCode: boolean;
  path: string;
  contentType: string;
  url?: string;
  [key: string]: any;
}

export interface ResizeWithImage extends Resize {
  image: Buffer;
}