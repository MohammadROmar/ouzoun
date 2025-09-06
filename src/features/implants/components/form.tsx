import ImplantFormComponent from './form-content';
import ImplantInfo from './info';
import ImplantDimentions from './dimentions';
import ImplantSourceAndStock from './source-stock';
import FormActions from '../../../shared/components/dashboard/form-actions';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import type { ImplantInputs } from '../models/implant-inputs';
import { Kit } from '@/features/kits/models/kit';

type ImplantFormProps = {
  defaultValues?: ImplantInputs;
  action: 'CREATE' | 'EDIT';
};

async function ImplantForm({ defaultValues, action }: ImplantFormProps) {
  const responseData = await get<Kit[]>('/api/kits');

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const kits = responseData.data;

  return (
    <ImplantFormComponent action={action} defaultValues={defaultValues}>
      <ImplantInfo kits={kits} />
      <ImplantSourceAndStock />
      <ImplantDimentions />
      <FormActions action={action} />
    </ImplantFormComponent>
  );
}

export default ImplantForm;
