import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Success = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    e.preventDefault();
    if (e.target.id === "wrapper") onClose([false, -1]);
  };

  return (
    <div
      className="back fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 text-gray-900 backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div
        className="flex w-[300px] flex-col space-y-10 bg-white items-center p-8"
        id="wrapper"
        onClick={handleClose}
      >
          <BsFillCheckCircleFill size={70} className="text-[#7C4CE0]" />

        <button
          type="submit"
          className="w-full rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white"
          onClick={() => onClose()}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Success;
