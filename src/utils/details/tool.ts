import { Tool } from '@/models/tool';

export function getToolDimensions(tool: Tool, t: (key: string) => string) {
  return {
    [t('item.width')]: tool.width,
    [t('item.height')]: tool.height,
    [t('item.thickness')]: tool.thickness,
  };
}
