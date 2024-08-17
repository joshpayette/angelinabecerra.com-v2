import { getImagePath } from '@/app/utils/get-image-path';
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src={getImagePath('logo.png')}
      width={330}
      height={65}
      alt="Text reading AngelinaBecerra.com, in a font that looks like handwriting"
    />
  );
}
