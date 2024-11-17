import {create} from "zustand";

interface StoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}