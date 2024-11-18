'use Client'

import { useStoreModalStore } from "@/hooks/use-store-modal"
import { Modal } from "../modal"

import * as z from 'zod';


// const formSchema =z.object({
//     name:   
// })

export const StoreModal = () => {
    const storeModal = useStoreModalStore();
    return (
        <Modal 
        title="Buat Store"
        description="Lengkapi data store anda"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            Store Form

        </Modal>
    )
}