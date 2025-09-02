import FallbackImage from '@/components/ui/fallback-image';
import assistantImg from '@/assets/images/assistant.jpg';
import { User } from '@/models/user';

type AssistantCardProps = { assistant: User };

function AssistantCard({ assistant }: AssistantCardProps) {
  return (
    <li className="bg-green space-y-2 rounded-xl p-2 text-white selection:bg-white selection:!text-black">
      <div className="flex items-center gap-2">
        <div className="bg-green relative aspect-square w-1/4 overflow-hidden rounded-lg">
          <FallbackImage
            src={
              assistant.profileImagePath
                ? assistant.profileImagePath
                : assistantImg
            }
            fallbackSrc={assistantImg}
            alt=""
            fill
            sizes="250px"
            aria-labelledby=""
          />
        </div>

        <h3 className="ltr:font-ubuntu text-lg">{assistant.userName}</h3>
      </div>

      <div>
        <p className="text-sm">
          <span>E-mail:</span>{' '}
          <span className="opacity-85">{assistant.email}</span>
        </p>
        <p className="text-sm">
          <span>Phone:</span>{' '}
          <span className="opacity-85">{assistant.phoneNumber}</span>
        </p>
      </div>
    </li>
  );
}

export default AssistantCard;
