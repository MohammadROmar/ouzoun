import { Link } from '@/i18n/navigation';
import RecoverIcon from '@/assets/icons/recover';
import DeleteAssistant from '../delete-assistant/button';
import type { AssistantCardProps } from '.';

type AssistantCredentialsProps = AssistantCardProps & {
  t: (key: string) => string;
};

function AssistantCardActions({ assistant, t }: AssistantCredentialsProps) {
  return (
    <div className="flex items-center gap-4 text-white dark:text-black">
      <Link
        href={`/assistants/all/${assistant.id}`}
        title={t('recover.button')}
        aria-label={t('recover.button')}
        className="bg-gray hover:bg-success size-6 cursor-pointer rounded-sm p-1 transition-colors duration-500"
      >
        <RecoverIcon className="aspect-square size-full" />
      </Link>

      <DeleteAssistant assistantId={assistant.id} />
    </div>
  );
}

export default AssistantCardActions;
