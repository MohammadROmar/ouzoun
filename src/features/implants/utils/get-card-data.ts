import BoxIcon from '@/assets/icons/box';
import DimensionsIcon from '@/assets/icons/dimensions';
import RadiusIcon from '@/assets/icons/radius';
import { Implant } from '../models/implant';

export function getCardData(implant: Implant) {
  const { width, height, radius, quantity } = implant;

  return [
    { icon: BoxIcon, label: 'item.quantity', value: quantity.toString() },
    {
      icon: DimensionsIcon,
      label: 'titles.dimensions',
      value: `${width.toString()} * ${height.toString()}`,
    },
    { icon: RadiusIcon, label: 'item.radius', value: radius.toString() },
  ];
}
