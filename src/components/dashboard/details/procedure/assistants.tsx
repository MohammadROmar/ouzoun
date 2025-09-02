import AssistantIcon from '@/assets/icons/assistant';
import { User } from '@/models/user';
import AssistantCard from '../../cards/assistant';

type ProcedureAssistantsProps = {
  assistants: User[];
  numberOfAsisstants: number;
  t: (key: string) => string;
};

function ProcedureAssistants({
  assistants,
  numberOfAsisstants,
  t,
}: ProcedureAssistantsProps) {
  return (
    <section className="mt-4 space-y-2">
      <div className="text-green border-b-gray/50 flex items-center gap-4 border-b">
        <AssistantIcon className="size-8" />
        <h2 className="ltr:font-ubuntu text-3xl">{t('assistants.title')}</h2>
      </div>

      <div className="space-y-2">
        <p>
          <span className="text-gray">{t('assistants.required')}: </span>
          <span>{numberOfAsisstants}</span>
        </p>

        <div>
          <p className="text-gray mb-2">{t('assistants.chosen')}</p>
          {assistants.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {assistants.map((assistant) => (
                <AssistantCard key={assistant.id} assistant={assistant} />
              ))}
            </ul>
          ) : (
            <p className="text-center">No chosen assistants yet</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProcedureAssistants;
