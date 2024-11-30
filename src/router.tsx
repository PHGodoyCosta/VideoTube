import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/Video/VideoPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import UploadPage from "./pages/Upload/UploadPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/video/:video",
        element: <VideoPage />
    },
    {
        path: "/profile/:profile",
        element: <ProfilePage />
    },
    {
        path: "/upload",
        element: <UploadPage />
    }
])

export default router
