import * as ReactRouter from "react-router-dom";
import Demo from "../../pages/demo/Demo";
import { MsalProvider } from "@azure/msal-react";


export default function Routes({instance}){

    const router = ReactRouter.createHashRouter(
        [
            {path: "/", element: <ReactRouter.Navigate to={"inicio"} />},
            {path: "inicio", element: <Demo/>}
        ]
    )

    return(
        <MsalProvider instance={instance}>
            <ReactRouter.RouterProvider router={router} />
        </MsalProvider>
        
    )
}