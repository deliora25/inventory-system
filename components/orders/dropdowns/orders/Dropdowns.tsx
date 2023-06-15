import { SalesDataType, StatusDataType } from '@/types';
import Select from '@/components/common/Select';
import { UseFormRegister } from 'react-hook-form';
import DateRangeIcon from '@mui/icons-material/DateRange';

type Props = {
  salesData: SalesDataType[];
  statusData: StatusDataType[];
  search: string;
  register: UseFormRegister<any>;
  salesOptions: string[];
  statusOptions: string[];
  statusOption: string;
  salesOption: string;
};

export default function Dropdown({
  register,
  statusOptions,
  salesOptions,
}: Props) {
  return (
    <div className="flex gap-5">
      <div className="h-fit w-fit border rounded-md mt-1">
        <DateRangeIcon className="items-center justify-center h-7 w-6 m-1" />
      </div>
      <Select
        className="rounded-md w-40 font-semibold text-sm"
        title=""
        options={salesOptions}
        register={register}
        name="salesOption"
        placeholder="Sales"
      />
      <Select
        className="rounded-md w-40 font-semibold text-sm"
        title=""
        options={statusOptions}
        register={register}
        name="statusOption"
        placeholder="Status"
      />
    </div>
  );
}
