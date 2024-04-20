import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

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
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";


function App() {
  const { user, dispatch, authChange } = useContext(GlobalContect);
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
 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  dispatch({
    type: "SIGN_IN",
    payload: user
  });
  dispatch({
    type: "AUTH_CHANGE",
  });
  
  });
 }, []);
  return <>{authChange && <RouterProvider router={routes} />}</>;
}


export default App
