import { StaticImageData } from 'next/image';

import * as Actions from '../actions';
import FallbackImage from '@/components/ui/fallback-image';
import type { TFunction } from '@/models/t-function';

type HeadingProps = {
  t: TFunction;
  title: string;
  kitId?: number;
  item: 'kits' | 'tools' | 'implants';
  id: string;
  fallbackImage: StaticImageData;
  imagePath: string | StaticImageData;
};

function Heading({
  item,
  id,
  title,
  kitId,
  imagePath,
  fallbackImage,
}: HeadingProps) {
  return (
    <section className="flex gap-4 max-sm:flex-col md:max-lg:flex-col md:max-lg:items-center">
      <div className="bg-green relative aspect-square w-full max-w-3xs overflow-hidden rounded-lg selection:bg-transparent max-sm:m-auto sm:w-1/3 md:w-1/6 md:max-lg:w-1/3">
        <FallbackImage
          src={imagePath}
          fallbackSrc={fallbackImage}
          alt=""
          aria-labelledby="details-title"
          fill
          sizes="(min-width: 40rem) 33.33vw, (min-width: 48rem) 16.67vw, (max-width: 64rem) 33.33vw, 16rem"
        />
      </div>

      <div className="flex flex-col justify-center gap-4 md:max-lg:flex-col md:max-lg:items-center">
        <h2
          id="details-title"
          className="ltr:font-ubuntu text-2xl max-md:text-center md:text-3xl"
        >
          {title}
        </h2>

        <div className="max-md:hidden">
          <Actions.Root item={item} id={id} kitId={kitId}>
            {item === 'kits' ? (
              <Actions.Delete />
            ) : (
              <>
                <div className="flex items-center gap-2 max-md:grid max-md:grid-cols-2 max-md:justify-end">
                  <Actions.Edit />
                  <Actions.Delete />
                </div>
                <Actions.Kit />
              </>
            )}
          </Actions.Root>
        </div>
      </div>
    </section>
  );
}

export default Heading;
