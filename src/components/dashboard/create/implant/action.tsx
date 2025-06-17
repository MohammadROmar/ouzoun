type CreateImplantActionProps = { t: (key: string) => string };

function CreateImplantAction({ t }: CreateImplantActionProps) {
  return (
    <div className="mt-4 flex items-center justify-end gap-2">
      <button className="button rounded-lg" type="reset">
        {t('reset')}
      </button>
      <button className="button rounded-lg">{t('add')}</button>
    </div>
  );
}

export default CreateImplantAction;
