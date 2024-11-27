import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import './assets/css/bootstrap.min.css'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>,
);
