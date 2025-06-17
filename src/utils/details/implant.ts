import { Implant } from '@/models/implant';

export function getDimentions(implant: Implant, t: (key: string) => string) {
  return {
    [t('width')]: `${implant.width.toString()} ${t('unit-mm')}`,
    [t('height')]: `${implant.height.toString()} ${t('unit-mm')}`,
    [t('radius')]: `${implant.radius.toString()} ${t('unit-mm')}`,
  };
}

export function getSourceStock(implant: Implant, t: (key: string) => string) {
  return {
    [t('brand')]: implant.brand.toString(),
    [t('quantity')]: implant.quantity.toString(),
  };
}
