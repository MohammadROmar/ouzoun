import { Implant } from '@/models/implant';

export function getToolDimentions(
  implant: Implant,
  t: (key: string) => string,
) {
  return {
    [t('item.width')]: `${implant.width.toString()} ${t('item.unit-mm')}`,
    [t('item.height')]: `${implant.height.toString()} ${t('item.unit-mm')}`,
    [t('item.radius')]: `${implant.radius.toString()} ${t('item.unit-mm')}`,
  };
}

export function getToolSourceStock(
  implant: Implant,
  t: (key: string) => string,
) {
  return {
    [t('item.brand')]: implant.brand.toString(),
    [t('item.quantity')]: implant.quantity.toString(),
  };
}
