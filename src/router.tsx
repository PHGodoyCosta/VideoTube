import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/Video/VideoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/video/:video",
        element: <VideoPage />
    }
])

export default router
