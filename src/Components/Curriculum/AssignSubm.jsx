import React, { useState } from "react";
import Input from "../../Common/Input/Input";
import ModalWrapper from "../../Common/Modal/ModalWrapper";
import { useDisclosure } from "@chakra-ui/react";
import { FadedPDF, CancelBtn, pdf } from "../../assets";

export const AssignSubm = () => {
  const [uploading, setuploading] = useState(false);
  const [uploaded, setuploaded] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [Submited, setSubmited] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUpload = () => {
    setuploading(true);
    setTimeout(() => {
      onClose();
    }, 2000);
    setuploaded(true);
  };

  const ass = [
    {
      id: 1,
      img: pdf,
      title: "My Assignment",
      name: "oluchi-assignment-file.pdf"
    },
  ]
  return (
    <>
    {!Submited ? (
      <div className="w-[70%]">
        <div>
          <Input
            type="text"
            label="Title"
            placeholder="Give your assignment a descriptive title"
            // value={regFormData.email}
            // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
          />
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="mt-3">
            <p className="font-semibold">Upload a PDF of your answer below</p>
            <div className="flex gap-4 flex-wrap ">
              <button
                className="border-2 border-primary text-primary py-1 px-4 rounded-sm mt-3 font-semibold"
                onClick={onOpen}
              >
                Upload
              </button>
              {uploaded && (
                <div className="flex gap-4 font-semibold mt-2">
                  <p className="my-auto">oluchi-assignment-file.pdf</p>
                  <img
                    src={CancelBtn}
                    className="h-[10px] my-auto cursor-pointer w-[10px]"
                    alt="cancel"
                  />
                </div>
              )}
            </div>
          </div>
          {!uploaded && (
            <div className="">
              <Input
                type="text"
                label="Or submit a link to your project"
                placeholder="Enter link here"
                // value={regFormData.email}
                // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
              />
            </div>
          )}
        </div>
        <div className="mt-12 flex">
          <button
            // onClick={onOpen}
            className="bg-primary ml-auto text-[#fff] py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
        <ModalWrapper isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          {isSubmit ? (
            <div className="h-[400px] flex relative">
              <img
                src={CancelBtn}
                onClick={onClose}
                className="h-[15px] cursor-pointer absolute top-4 right-0  w-[15px] "
                alt="cancel"
              />
              {!uploading ? (
                <p className="text-center m-auto font-semibold text-[18px]">
                  Drop file here, paste or
                  <span
                    className="text-primary underline hover:cursor-pointer"
                    onClick={handleUpload}
                  >
                    {" "}
                    browse files
                  </span>
                </p>
              ) : (
                <div className="text-center m-auto font-semibold text-[18px]">
                  <div className="w-fit mx-auto mb-2 border-4 border-[#F4EAFF] border-r-primary rounded-full">
                    <img src={FadedPDF} className="py-4 px-5" alt="upload" />
                  </div>
                  <p>Uploading file...</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="font-[700] text-[20px] w-[300px] mx-auto">You are about to submit your assignment</p>
              <p className="my-4 text-[18px] w-[300px] mx-auto">
                You will not be able to edit your submission after you submit.
              </p>
              <div className="flex gap-4 w-fit mx-auto">
                <button
                  // onClick={onOpen}
                  className="bg-primary border-2 border-primary text-[#fff] py-2 px-8 font-semibold rounded-md"
                >
                  Submit
                </button>
                <button
                  // onClick={onOpen}
                  className="text-primary border-2 border-primary py-2 px-8 rounded-md font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </ModalWrapper>
      </div>
    ):(
      <div className="flex flex-wrap gap-6">
        {ass.map((item) => (
          <div key={item.id} className="text-center">
            <img src={item.img} alt="file" className="mx-auto" />
            <p className="text-[18px] mt-2 font-bold">{item.title}</p>
            <p className="text-[14px] text-[#858585]">{item.name}</p>
          </div>
        ))}
      </div>
    )}
    </>

  );
};
