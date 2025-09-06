import ToolInfo from './info';
import ToolFormComponent from './form-content';
import ToolDimensions from './dimensions';
import ToolStock from './stock';
import FormActions from '../../../shared/components/dashboard/form-actions';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import { Kit } from '@/features/kits/models/kit';
import type { ToolInputs } from '../models/tool-inputs';

type ToolFormProps = { defaultValues?: ToolInputs; action: 'CREATE' | 'EDIT' };

async function ToolForm({ action, defaultValues }: ToolFormProps) {
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
    <ToolFormComponent action={action} defaultValues={defaultValues}>
      <ToolInfo kits={kits} />
      <ToolDimensions />
      <ToolStock />
      <FormActions action={action} />
    </ToolFormComponent>
  );
}

export default ToolForm;
