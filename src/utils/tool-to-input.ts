import { Tool, type ToolInputs } from '@/models/tool';

export function toolToInputs(tool: Tool): ToolInputs {
  return {
    name: tool.name,
    kitId: tool.kitId.toString(),
    categoryId: tool.categoryId,
    width: tool.width.toString(),
    height: tool.height.toString(),
    thickness: tool.thickness.toString(),
    quantity: tool.quantity.toString(),
    image: new File([], 'empty.png'),
  };
}
