import DetailContainer, {
  type DetailContainerProps,
} from '@/shared/components/dashboard/detail-container';

type DetailProps = {
  details: { [key: string]: string } | string;
} & DetailContainerProps;

function Detail({ title, icon, details, className }: DetailProps) {
  return (
    <DetailContainer title={title} icon={icon} className={className}>
      {typeof details === 'string' ? (
        <p className="max-md:text-sm">{details}</p>
      ) : (
        <ul>
          {Object.entries(details).map(([key, value]) => (
            <li key={key ? `${key}-${value}` : value}>
              <p className="flex whitespace-pre max-md:justify-between max-md:text-sm">
                <span>{key}</span>
                <span className="max-md:hidden">: </span>
                <span className="md:text-gray">{value}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </DetailContainer>
  );
}

export default Detail;
