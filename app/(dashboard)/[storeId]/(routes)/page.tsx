import db from "@/lib/db"
import { redirect } from "next/navigation";

const DashboardPage=async({params}:{params:{storeId:string}})=>{
    console.log(params)
    const store = await db.store.findFirst({where:{id:params?.storeId}});

    if(!store){
        redirect('sign-in');
    }
    return(


        <div>
            Nama Toko : {""}
            {store?.name ?? "unknown store"}
        </div>
    )
}


export default DashboardPage