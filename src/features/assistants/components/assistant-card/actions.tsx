import SendMailIcon from '@/assets/icons/send-mail';
import CallIcon from '@/assets/icons/call';
import DeleteIcon from '@/assets/icons/delete';
import type { AssistantCardProps } from '.';

type AssistantCredentialsProps = AssistantCardProps & {
  t: (key: string) => string;
};

function AssistantCardActions({ assistant, t }: AssistantCredentialsProps) {
  return (
    <div className="flex items-center gap-4 text-white dark:text-black">
      <a
        href={`mailto:${assistant.email}`}
        title={t('send-email')}
        aria-label={t('send-email')}
        className="bg-gray size-6 cursor-pointer rounded-sm p-1 transition-colors duration-500 hover:bg-blue-400"
      >
        <SendMailIcon className="aspect-square size-full" />
      </a>
      <a
        href={`tel:${assistant.phoneNumber}`}
        title={t('call')}
        aria-label={t('call')}
        className="bg-gray hover:bg-success size-6 cursor-pointer rounded-sm p-1 transition-colors duration-500"
      >
        <CallIcon className="aspect-square size-full" />
      </a>
      <button
        title={t('delete')}
        aria-label={t('delete')}
        className="bg-gray hover:bg-danger size-6 cursor-pointer rounded-sm p-1 transition-colors duration-500"
      >
        <DeleteIcon className="aspect-square size-full" />
      </button>
    </div>
  );
}

export default AssistantCardActions;
