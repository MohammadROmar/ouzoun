import Image from 'next/image';

import dentalEquipmentImg from '@/assets/images/dental-equipment.png';
import PatternIcon from '@/assets/icons/patterns/pattern2';

export default function HeroImage() {
  return (
    <div className="relative flex-1">
      <Image src={dentalEquipmentImg} alt="Dental Equipment Image." />

      <PatternIcon className="text-green absolute top-1/12 -left-1/100 -z-10 size-28" />
      <PatternIcon className="text-green absolute right-0 bottom-1/12 -z-10 size-28" />
    </div>
  );
}
