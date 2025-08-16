import { Implant } from '@/models/implant';

export const implants: Implant[] = [
  {
    id: 'implant-1',
    kitId: 'kit-1',
    radius: 2.5,
    width: 4.0,
    height: 10.0,
    quantity: 20,
    brand: 'ImplantTech',
    description: 'High-quality titanium implant for dental procedures.',
  },
  {
    id: 'implant-3',
    kitId: 'kit-2',
    radius: 2.0,
    width: 3.0,
    height: 8.0,
    quantity: 25,
    brand: 'MiniDent',
    description: 'Mini implant suitable for narrow ridges.',
  },
  {
    id: 'implant-4',
    kitId: 'kit-3',
    radius: 3.2,
    width: 5.0,
    height: 13.0,
    quantity: 10,
    brand: 'WideFix',
    description: 'Wide implant for molar region.',
  },
  {
    id: 'implant-5',
    kitId: 'kit-4',
    radius: 2.8,
    width: 4.2,
    height: 11.5,
    quantity: 18,
    brand: 'StandardLine',
    description: 'Standard implant for general use.',
  },
];
