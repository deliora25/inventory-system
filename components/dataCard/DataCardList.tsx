import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { DataAmount } from "@/types";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function DataCardList() {
  const [data, setData] = useState<DataAmount[]>([]);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const getDataAmount = async () => {
      try {
        const response = await axios.get("http://localhost:4000/dataAmount");
        if (response && response.data) {
          setData(response.data);
          setOpen(true);
        } else {
          setOpen(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getDataAmount();
  }, []);

  console.log(data);
  return (
    <div className="grid lg:grid-cols-4 md:flex-col gap-5 mb-8">
      {data.map((item: any) => {
        return (
          <div key={item.id} className="rounded bg-white h-32 shadow-sm">
            <DataCard item={item} />
          </div>
        );
      })}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={data && data.length > 0 ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {data && data.length > 0
            ? "Data fetched successfully!"
            : "Error! No data!"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DataCardList;
