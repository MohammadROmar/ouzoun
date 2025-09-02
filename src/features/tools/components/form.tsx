import ToolInfo from './info';
import ToolFormComponent from './form-content';
import ToolDimensions from './dimensions';
import ToolStock from './stock';
import FormActions from '../../../shared/components/dashboard/form-actions';
import { get } from '@/shared/api/get';
import type { ToolInputs } from '../models/tool-inputs';

type ToolFormProps = { defaultValues?: ToolInputs; action: 'CREATE' | 'EDIT' };

async function ToolForm({ action, defaultValues }: ToolFormProps) {
  const kits = await get('/api/kits');

  return (
    <ToolFormComponent action={action} defaultValues={defaultValues}>
      <ToolInfo kits={kits} />
      <ToolDimensions />
      <ToolStock />
      <FormActions action={action} />
    </ToolFormComponent>
  );
}

export default ToolForm;
