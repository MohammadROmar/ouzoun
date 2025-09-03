import EmailIcon from '@/assets/icons/email';
import MobileIcon from '@/assets/icons/mobile';
import type { AssistantCardProps } from '.';

type AssistantCredentialsProps = AssistantCardProps & {
  t: (key: string) => string;
};

function AssistantCredentials({ assistant, t }: AssistantCredentialsProps) {
  return (
    <div className="text-gray flex flex-col items-center">
      <div title={t('email')} className="flex items-center gap-2 text-sm">
        <span aria-label={t('email')}>
          <EmailIcon className="size-5" />
        </span>
        <p>{assistant.email}</p>
      </div>

      <div
        title={t('phone-number')}
        className="mt-1 flex items-center gap-2 text-sm"
      >
        <span aria-label={t('phone-number')}>
          <MobileIcon className="size-5" />
        </span>
        <p>{assistant.phoneNumber}</p>
      </div>
    </div>
  );
}

export default AssistantCredentials;
