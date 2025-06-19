import type { Implant, ImplantInputs } from '@/models/implant';

export function implantToInputs(implant: Implant): ImplantInputs {
  return {
    name: implant.name,
    image: new File([], 'empty.txt'),
    description: implant.description,
    brand: implant.brand,
    quantity: implant.quantity.toString(),
    width: implant.width.toString(),
    height: implant.height.toString(),
    radius: implant.radius.toString(),
    'kit-id': implant.kitId,
  };
}
