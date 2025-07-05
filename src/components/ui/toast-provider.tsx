"use client";
import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { CheckCircle, XCircle } from "lucide-react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [toastContent, setToastContent] = React.useState<{ title: string; description?: string; variant?: string } | null>(null);

  // Expose a context for triggering toasts
  const showToast = React.useCallback((content: { title: string; description?: string; variant?: string }) => {
    setToastContent(content);
    setOpen(true);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      <Toast.Provider swipeDirection="right">
        {children}
        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          duration={10000}
          className={`fixed bottom-6 right-6 z-[100] w-[320px] rounded-md border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg px-3 py-2
            flex flex-col gap-1
            ${toastContent?.variant === "destructive"
              ? "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200"
              : "border-gray-200 bg-white text-gray-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
            }
          `}
        >
          <Toast.Title className="flex items-center gap-2 text-sm font-normal">
            {toastContent?.variant === "destructive" ? (
              <XCircle className="w-5 h-5 text-red-500" />
            ) : (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
            <span className="font-bold">{toastContent?.title}</span>
          </Toast.Title>
          {toastContent?.description && (
            <Toast.Description className="text-xs font-normal mt-0.5 opacity-90">{toastContent.description}</Toast.Description>
          )}
          <Toast.Action asChild altText="Close">
            <button
              className="absolute top-2 right-2 text-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-0 bg-transparent border-none"
              onClick={() => setOpen(false)}
              tabIndex={0}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-2 w-[320px] z-[100]" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}

// Context for showing toast from anywhere
const ToastContext = React.createContext<(content: { title: string; description?: string; variant?: string }) => void>(() => {});

export function useRadixToast() {
  return React.useContext(ToastContext);
}
