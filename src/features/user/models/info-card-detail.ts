import { SVGProps, type FC } from 'react';

export type InfoCardDetailProps = {
  icon: FC<SVGProps<SVGElement>>;
  title: string;
  value: string;
};
