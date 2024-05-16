"use client";
import { useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PhotoModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    console.log("ABC");
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }
  return createPortal(
    <div className="fixed top-0 w-100 h-100 bg-black opacity-10">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button">
          X
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
