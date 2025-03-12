import React, { useState, useEffect } from "react";
import ChangeProductForm from "../admin/changeProduct";

const Modal = ({ isOpen, onClose, title, children, onSubmit }) => {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-dark text-white w-full max-w-5xl p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner clicks
      >
        {/* 🔹 Modal Header - Now Visible */}
        <div className="flex justify-between items-center px-4 py-3 rounded-t-lg">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-500 focus:outline-none scale-150"
          >
            &times;
          </button>
        </div>

        {/* Modal Content - Fixed Spacing */}
        <div className="py-4">{children}</div>

        {/* Modal Footer */}
        <div className="flex justify-end border-t border-gray-600 pt-3">
          <button
            onClick={onSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Submit Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Open Modal Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
      >
        Edit Data
      </button>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Change Data"
        onSubmit={() => {
          console.log("Form submitted!");
          setModalOpen(false); // Close modal after submission
        }}
      >
        <ChangeProductForm />
      </Modal>
    </div>
  );
};

export default ModalButton;
