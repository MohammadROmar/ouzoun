import type { Implant } from '@/features/implants/models/implant';
import type { ImplantInputs } from '@/features/implants/models/implant-inputs';

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
