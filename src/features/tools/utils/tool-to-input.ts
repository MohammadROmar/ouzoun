import { Tool } from '../models/tool';
import type { ToolInputs } from '../models/tool-inputs';

export function toolToInputs(tool: Tool): ToolInputs {
  return {
    name: tool.name,
    kitId: tool.kitId !== null ? tool.kitId.toString() : null,
    categoryId: tool.categoryId,
    width: tool.width.toString(),
    height: tool.height.toString(),
    thickness: tool.thickness.toString(),
    quantity: tool.quantity.toString(),
    image: new File([], 'empty.png'),
  };
}
