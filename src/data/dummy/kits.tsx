import { tools } from './tools';
import { implants } from './implants';

import { Kit } from '@/models/kit';

export const kits: Kit[] = [
  {
    id: 'kit-1',
    name: 'Basic Implant Kit',
    tools: tools,
    implant: implants.filter((i) => i.kitId === 'kit-1'),
  },
  {
    id: 'kit-2',
    name: 'Mini Kit',
    tools: tools.filter((t) => t.kitId === 'kit-2'),
    implant: implants.filter((i) => i.kitId === 'kit-2'),
  },
  {
    id: 'kit-3',
    name: 'Wide Kit',
    tools: tools.filter((t) => t.kitId === 'kit-3'),
    implant: implants.filter((i) => i.kitId === 'kit-3'),
  },
  {
    id: 'kit-4',
    name: 'Standard Kit',
    tools: tools.filter((t) => t.kitId === 'kit-4'),
    implant: implants.filter((i) => i.kitId === 'kit-4'),
  },
  {
    id: 'kit-5',
    name: 'Advanced Kit',
    tools: [],
    implant: [],
  },
];
