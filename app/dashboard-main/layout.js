import { stat } from "fs";

export default function dashboardmainLayout({children,feed,stats}){
return (
    <div style={{display :"flex",gap:"20px"}}>
        {children}
       
    </div>
)
}

