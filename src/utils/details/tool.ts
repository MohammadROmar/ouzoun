import { Tool } from '@/models/tool';

export function getToolDimensions(tool: Tool, t: (key: string) => string) {
  return {
    [t('item.width')]: tool.width.toString(),
    [t('item.height')]: tool.height.toString(),
    [t('item.thickness')]: tool.thickness.toString(),
  };
}

export function getToolStock(tool: Tool, t: (key: string) => string) {
  return {
    [t('item.quantity')]: tool.quantity.toString(),
    [t('item.category')]:
      tool.categoryId === 1 ? t('item.surgery') : t('item.recovery'),
  };
}
