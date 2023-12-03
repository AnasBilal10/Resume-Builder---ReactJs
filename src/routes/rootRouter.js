import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import EditResumeBuilder from "../components/EditForm/editResumeBuilder";
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/forms",
        Component: EditResumeBuilder,
    }
])

export default router;