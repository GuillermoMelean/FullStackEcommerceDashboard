'use client'

import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  /*
    you could use like this
    const storeModal = useStoreModal();

    but this would not work inside and useEffect,
    so that's why we extrack the props from the 
  */
  const isOpen = useStoreModal((state) => state.isOpen)
  const onOpen = useStoreModal((state) => state.onOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return null;
}

export default SetupPage;