import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
 const routes = createBrowserRouter([
  {
   path:"/",
   element: <Layout/>
 }
])
  return (<RouterProvider router={routes}/>);
}

export default App
