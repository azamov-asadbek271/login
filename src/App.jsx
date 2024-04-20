import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { Navigate } from "react-router-dom";

// Page
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// components
import ProtecdRouter from "./components/ProtecdRouter";

import { useContext } from "react";
import { GlobalContect } from "./context/useGlobalContext";

function App() {
  const {user} = useContext(GlobalContect)
 const routes = createBrowserRouter([
   {
     path: "/",
     element: (
       <ProtecdRouter user={user}>
         <Layout />
       </ProtecdRouter>
     ),
     children: [
       {
         index: true,
         element: <Home />,
       },
       {
         path: "/about",
         element: <About />,
       },
       {
         path: "/contact",
         element: <Contact />,
       },
     ],
   },
   {
     path: "/signin",
     element: user ? <Navigate to="/" /> : <Signin />,
   },
   {
     path: "/signup",
     element: user ? <Navigate to="/" /> : <Signup />,
   },
 ]);
  return (<RouterProvider router={routes}/>);
}

export default App
