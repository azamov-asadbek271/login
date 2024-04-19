import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

// Page
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";

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
