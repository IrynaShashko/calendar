import { toast, type ToastOptions } from "react-toastify";

interface ConfirmToastProps {
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export function ConfirmToast({
  message,
  onConfirm,
  onCancel,
}: ConfirmToastProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span>{message}</span>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button
          style={{
            background: "#B86C6D",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "4px 12px",
            cursor: "pointer",
          }}
          onClick={() => {
            toast.dismiss();
            onConfirm();
          }}
        >
          OK
        </button>
        <button
          style={{
            background: "#eee",
            color: "#333",
            border: "none",
            borderRadius: 4,
            padding: "4px 12px",
            cursor: "pointer",
          }}
          onClick={() => {
            toast.dismiss();
            onCancel && onCancel();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export function showConfirmToast(
  message: string,
  onConfirm: () => void,
  onCancel?: () => void,
  options?: ToastOptions,
) {
  toast(
    <ConfirmToast
      message={message}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />,
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      ...options,
    },
  );
}
