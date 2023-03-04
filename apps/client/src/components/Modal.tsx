import React from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  const modalContent = (
    <div className="fixed inset-0 z-50 w-full md:w-8/12 md:mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-transparent h-[28rem] top-1/2 left-1/2">
      <div className="relative w-full bg-white rounded-lg">
        <button
          className="absolute top-3 right-2"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
  return isOpen ? ReactDOM.createPortal(modalContent, document.body) : null;
}
