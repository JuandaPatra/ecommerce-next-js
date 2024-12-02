'use client'; 
import {Store} from "@prisma/client";

import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { useStoreModalStore } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../button";
import { Check, ChevronDown, PlusCircle, StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../command";

type popOverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends popOverTriggerProps {
    items : Store[];
}

const StoreSwitcher=({className, items =[]}: StoreSwitcherProps)=>{
    const storeModal = useStoreModalStore();
    const params = useParams();
    const router = useRouter()
    
    const formattedItems = items.map((item)=>({
        label : item.name, 
        value : item.id,

    }))

    const currentStore =formattedItems.find((item)=> item.value === params.storeId)

    const [open,setOpen]= useState(false);

    const onStoreSelect = (store :{value:string,label:string})=>{
        setOpen(false)
        router.push(`/${store.value}`)

    }
    return(
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button 
                    variant="outline"
                    size="sm"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Pilih Toko"
                    className={cn("w-[200px] justify-between", className )}
                    >
                        <StoreIcon className="mr-2 h-4 w-4" />
                        {currentStore?.label}
                            <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandList>
                            <CommandInput placeholder="Cari Toko" />
                            <CommandEmpty>
                                Toko Tidak Ditemukan
                            </CommandEmpty>
                            <CommandGroup
                            heading='Toko'
                            >
                                {formattedItems.map((item)=>(
                                    <CommandItem key={item.value} onSelect={()=>onStoreSelect(item)}
                                    className="text-sm"
                                    >
                                        <StoreIcon className="mr-2 h-4 w-4"/>
                                        {item.label}
                                        <Check className={cn("ml-auto h-4 w-4 ", currentStore?.value === item.value ? "opacity-100" : 
                                            "opacity-0"
                                        )}/>


                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        <CommandSeparator />
                        <CommandList>
                            <CommandGroup >

                                <CommandItem onSelect={()=>{
                                    setOpen(false)
                                    storeModal.onOpen()
                                }}>

                                    <PlusCircle className="mr-2 h-5 w-5" />
                                    Buat Toko

                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>

                </PopoverContent>
            </Popover>
        </div>
    )
}

export default StoreSwitcher;