import React, { useEffect, useState } from 'react';
import { DataAmount } from '@/types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import DataCard from './DataCard';

type Props = {
  data: DataAmount[];
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
Alert.displayName = 'Alert';

function DataCardList({ data }: Props) {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      setOpen(true);
    }
  }, [data]);

  return (
    <div className="grid lg:grid-cols-4 md:flex-col gap-5 mb-8">
      {data.map((item: any) => (
        <div key={item.id} className="rounded bg-white h-32 shadow-sm">
          <DataCard item={item} />
        </div>
      ))}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={data && data.length > 0 ? 'success' : 'error'}
          sx={{
            width: '100%',
          }}
        >
          {data && data.length > 0
            ? 'Data fetched successfully!'
            : 'Error! No data!'}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DataCardList;
