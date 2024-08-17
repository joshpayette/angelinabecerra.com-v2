export function getImagePath(image: string) {
  return `${process.env.NEXT_PUBLIC_CLOUDFRONT_ORIGIN}/${image}`;
}
