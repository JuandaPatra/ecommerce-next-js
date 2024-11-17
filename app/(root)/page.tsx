'use client';
import {Button} from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";

const SetupPage=()=> {
  return (
   <div className="p-4">
    <Modal title="tes Modal title" description="tes Modal description" isOpen={true} onClose={() => {}}>
        <h1>Judul</h1>
        <h2>Apakah ini adalah isi</h2>
    </Modal>
   </div>
  );
}


export default SetupPage;