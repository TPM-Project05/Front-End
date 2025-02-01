import React from "react";

export default function Toast({ open, onClose, onConfirm, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-[9999] ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#3D2C8D] rounded-xl shadow-xl p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <p className="text-lg font-medium mb-4">{children}</p>
        {onConfirm && (
          <div className="flex justify-center gap-4 z-20">
            <button
              onClick={onClose}
              className="px-4 py-2 border bg-opacity-100 rounded-[12px] hover:bg-[#25226d]"
            >
              <p className="text-white">Cancel</p>
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-[12px] hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
