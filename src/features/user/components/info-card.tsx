import InfoCardDetail from './info-card-details';
import type { InfoCardDetailProps } from '../models/info-card-detail';

type InfoCardProps = { title: string; cardDetails: InfoCardDetailProps[] };

function InfoCard({ title, cardDetails }: InfoCardProps) {
  return (
    <div className="card-shadow bg-bg-primary w-full space-y-3 rounded-xl p-2 md:p-3">
      <h3 className="ltr:font-ubuntu text-xl md:text-2xl">{title}</h3>

      <ul className="space-y-2">
        {cardDetails.map((detail) => (
          <InfoCardDetail key={detail.title} {...detail} />
        ))}
      </ul>
    </div>
  );
}

export default InfoCard;
