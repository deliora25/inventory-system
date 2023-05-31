import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NewProduct from "./NewProduct";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NewProductModal({ isOpen, onClose }: Props) {
  const [productData, setProductData] = useState({});
  const cancelButtonRef = useRef(null);
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "new") {
      await axios.post("http://localhost:4000/products", productData);
      return;
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-fit sm:max-w-6xl">
                <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start ">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left  w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 pl-6 pb-10"
                      >
                        New Product
                      </Dialog.Title>
                      <div className="mt-2  flex flex-grid grid-cols-2 gap-10 items-center justify-center">
                        <NewProduct />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center justify-center">
                  <Button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={handleSubmit}
                  >
                    Confirm
                  </Button>
                  <Button
                    type="button"
                    className="mt-3 inline-flex  w-full justify-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
