import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/main";
import Home from "./pages/home";
import Product from "./pages/product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:id",
                element: <Product />
            },
        ]
    },
]);
function App() {
  return (
      <div className="app">
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
