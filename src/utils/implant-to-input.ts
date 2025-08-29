import type { Implant, ImplantInputs } from '@/models/implant';

export function implantToInputs(implant: Implant): ImplantInputs {
  return {
    image: new File([], 'empty.png'),
    description: implant.description,
    brand: implant.brand,
    quantity: implant.quantity.toString(),
    width: implant.width.toString(),
    height: implant.height.toString(),
    radius: implant.radius.toString(),
    kitId: implant.kitId.toString(),
  };
}
