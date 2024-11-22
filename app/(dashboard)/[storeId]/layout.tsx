import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
interface DashboardLayoutProps {
    children: React.ReactNode,
    params: {storeId :String}
}

export default async function DashboardLayout({children,params}:DashboardLayoutProps) {

    const { userId } =await  auth();


    if(!userId){
        redirect('sign-in');

    }

    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    return(

        <div>
            This is Navbar

            {children}
        </div>

    )
}