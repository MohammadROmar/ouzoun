import { createContext, useContext } from 'react';

export type ActionsProps = {
  item: 'kits' | 'tools' | 'implants';
  id: string;
  kitId?: number;
};

type ActionsContext = ActionsProps & { t: (key: string) => string };

export const ActionContext = createContext<ActionsContext | undefined>(
  undefined,
);

export function useActionContext() {
  const data = useContext(ActionContext);

  if (data === undefined) {
    throw new Error('ActionContext is undefined');
  }

  return data;
}
