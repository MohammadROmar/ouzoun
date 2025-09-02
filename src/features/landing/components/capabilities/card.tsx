import type { Capability } from '../../utils/get-capabilities';

type CapabilityCardProps = { capability: Capability };

function CapabilityCard({ capability }: CapabilityCardProps) {
  const { icon: Icon, title, body } = capability;

  return (
    <li className="bg-green-light flex-1 space-y-2 rounded-xl p-4">
      <Icon className="text-green size-12" />
      <h4 className="text-green ltr:font-ubuntu text-lg font-medium">
        {title}
      </h4>
      <p className="text-bg-primary text-sm">{body}</p>
    </li>
  );
}

export default CapabilityCard;
