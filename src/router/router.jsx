
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import View from "../view/view";
import Datos from "../pages/Datos";
import Eyes from "../pages/Eyes";
import Movil from "../pages/movil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <View/>,
        children:[
            {
                index: true,
                element: <Datos/>
            },
            {
                path: "celulares",
                element: <Eyes/>
            },
            {
                path: "moviles",
                element: <Movil/>
            }
        ]
    }
]);

export default function Router(){
    return <RouterProvider router={router} />;
}