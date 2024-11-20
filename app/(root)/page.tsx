'use client';

// import { cookies } from "next/headers"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/appSidebar";
import { useStoreModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage= ()=> {

  const onOpen = useStoreModalStore((state)=>state.onOpen)
  const isOpen = useStoreModalStore((state)=> state.isOpen)

  useEffect(()=>{
    if(!isOpen){
      onOpen()
    }

  },[isOpen, onOpen])
  return (
   <div className="p-4">
    Root Page
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
   </div>
  );
}


export default SetupPage;