import { Implant } from '@/models/implant';

export function getDimentions(implant: Implant, t: (key: string) => string) {
  return {
    [t('width')]: implant.width.toString(),
    [t('height')]: implant.height.toString(),
    [t('radius')]: implant.radius.toString(),
  };
}

export function getSourceStock(implant: Implant, t: (key: string) => string) {
  return {
    [t('brand')]: implant.brand.toString(),
    [t('quantity')]: implant.quantity.toString(),
  };
}
