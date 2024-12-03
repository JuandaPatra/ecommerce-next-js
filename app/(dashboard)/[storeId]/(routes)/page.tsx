import db from "@/lib/db"
import { redirect } from "next/navigation";
import { SettingForm } from "./settings/components/setting-forms";

const DashboardPage=async({params}:{params:{storeId:string}})=>{
    console.log(params)
    const store = await db.store.findFirst({where:{id:params?.storeId}});

    if(!store){
        redirect('sign-in');
    }
    return(


        <div className="px-4 py-3">
            <SettingForm initialData={store} />
            Nama Toko : {""}
            {store?.name ?? "unknown store"}
        </div>
    )
}


export default DashboardPage