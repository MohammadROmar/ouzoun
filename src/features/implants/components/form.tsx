import ImplantFormComponent from './form-content';
import ImplantInfo from './info';
import ImplantDimentions from './dimentions';
import ImplantSourceAndStock from './source-stock';
import FormActions from '../../../shared/components/dashboard/form-actions';
import { get } from '@/shared/api/get';
import type { ImplantInputs } from '../models/implant-inputs';

type ImplantFormProps = {
  defaultValues?: ImplantInputs;
  action: 'CREATE' | 'EDIT';
};

async function ImplantForm({ defaultValues, action }: ImplantFormProps) {
  const kits = await get('/api/kits');

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
