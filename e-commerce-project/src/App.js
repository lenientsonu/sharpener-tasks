import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StorePage from "./pages/Store";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/store", element: <StorePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
