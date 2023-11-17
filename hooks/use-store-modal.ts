// This hook is created to acess the create store modal in any where

import {create} from 'zustand'

interface useStoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

export const useStoreModal = create<useStoreModalStore>((set)  =>({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));