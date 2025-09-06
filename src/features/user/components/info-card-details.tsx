import type { InfoCardDetailProps } from '../models/info-card-detail';

function InfoCardDetail({ icon: Icon, title, value }: InfoCardDetailProps) {
  return (
    <li className="bg-bg-primary flex items-center gap-4">
      <div className="bg-green h-full rounded-sm p-1">
        <Icon className="size-6 text-white" />
      </div>

      <div>
        <h4>{title}</h4>
        <p className="text-gray text-sm">{value}</p>
      </div>
    </li>
  );
}

export default InfoCardDetail;
