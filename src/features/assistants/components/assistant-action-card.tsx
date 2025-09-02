import { Link } from '@/i18n/navigation';
import { getAssistantsActions } from '@/features/assistants/utils/get-assistants-actions';

type AssistantActionCardProps = ReturnType<typeof getAssistantsActions>[0];

function AssistantActionCard({
  icon: Icon,
  title,
  description,
  to,
}: AssistantActionCardProps) {
  return (
    <li key={title}>
      <Link
        href={to}
        className="bg-green-light flex h-full flex-col gap-2 rounded-xl p-4"
      >
        <span aria-hidden>{<Icon className="text-green size-12" />}</span>
        <h2 className="text-green ltr:font-ubuntu text-lg font-medium">
          {title}
        </h2>
        <p className="text-bg-primary text-sm">{description}</p>
      </Link>
    </li>
  );
}

export default AssistantActionCard;
