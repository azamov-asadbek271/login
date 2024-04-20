import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

// Page
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// components
import ProtecdRouter from "./components/ProtecdRouter";


function App() {
 const routes = createBrowserRouter([
   {
     path: "/",
     element: (
       <ProtecdRouter user={true}>
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
     element: <Signin />,
   },
   {
     path: "/signup",
     element: <Signup />,
   },
 ]);
  return (<RouterProvider router={routes}/>);
}

export default App
