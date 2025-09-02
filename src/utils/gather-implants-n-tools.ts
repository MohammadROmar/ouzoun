import { Implant } from '@/models/implant';
import { Tool } from '@/models/tool';

type ImplantKit = { implant: Implant; toolsWithImplant: Tool[] };

function gatherImplantsAndTools(implantKits: ImplantKit[]) {
  const implants: Implant[] = [];
  const tools: Tool[] = [];

  for (const kit of implantKits) {
    implants.push(kit.implant);

    tools.push(...kit.toolsWithImplant);
  }

  return { implants, tools };
}

export { gatherImplantsAndTools };
