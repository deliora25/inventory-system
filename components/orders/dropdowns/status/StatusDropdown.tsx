import { StatusDataType } from '@/types';
import Select from '@/components/common/Select';
import { UseFormRegister } from 'react-hook-form';
import DateRangeIcon from '@mui/icons-material/DateRange';

type Props = {
  statusData: StatusDataType[];
  search: string;
  register: UseFormRegister<any>;
  statusOptions: string[];
  statusOption: string;
};

export default function Dropdown({
  register,
  statusOptions,
  statusOption,
}: Props) {
  console.log(statusOption);
  return (
    <div className="sm:grid sm:grid-cols-2 gap-0 ">
      <div className="sm:pl-28 pl-0">
        <div className="h-fit w-fit border rounded-md mt-1  border-slate-500 ">
          <DateRangeIcon className="items-center justify-center h-7 w-6 m-1 hidden md:block" />
        </div>
      </div>

      <div className="">
        <Select
          className="rounded-md sm:w-40 w-[50%] text-center font-semibold text-sm sm:text-left "
          title=""
          options={statusOptions}
          register={register}
          name="statusOption"
          placeholder="Status"
        />
      </div>
    </div>
  );
}
