import { MainNav } from "@/components/main-nav";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { UserButton } from "@clerk/nextjs";
import StoreSwitcher from "../store-switcher";
import { auth } from "@clerk/nextjs/server";
 import {redirect} from "next/navigation"
import db from "@/lib/db";
export const Navbar = async() => {
  const {userId} = await auth()

  if(!userId){
    redirect('/sign-in')
  }

  const stores = await db.store.findMany({
    where:{
      userId : userId
    }
  })
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <StoreSwitcher items={stores}  />
            <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4   ">
                <UserButton />
              </div>
        </div>
      </div>
    </>
  );
};
