import * as ReactRouter from "react-router-dom";
import Demo from "../../pages/demo/Demo";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";


export default function Routes(){

    const isAuthenticated = useIsAuthenticated()
    const msal = useMsal()
    
    const authVerify = async () => {
        if (!isAuthenticated) {
            return msal.instance.loginRedirect()
        }
        return null
    }

    const router = ReactRouter.createHashRouter(
        [
            {path: "/", element: <ReactRouter.Navigate to={"inicio"} />},
            {path: "inicio", element: <Demo text={"Pagina livre"} url={"/bloq"} />},
            {path: "bloq", element: <Demo text={"Pagina autenticada"} url={"/inicio"} />, loader: authVerify},
        ]
    )

    return(<ReactRouter.RouterProvider router={router} />)
}
