import { Route, Routes, useRoutes } from "react-router";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductsSearch from "../pages/ProductsSearch/ProductsSearch";
import Recipes from "../pages/Recipes/Recipes";
import { path } from "../constants/path";
import Homepage from "../pages/Homepage/Homepage";

const useRoutesElement = () => {
  const routes = [
    {
      path: path.homepage,
      element: <MainLayout />,
      children: [
        {
          path: path.homepage,
          element: <Homepage />,
        },
        {
          path: path.recipes,
          element: <Recipes />,
        },
        {
          path: path.products,
          element: <Products />,
        },
        {
          path: path.productsSearch,
          element: <ProductsSearch />,
        },
        {
          path: path.about,
          element: <About />,
        },
      ],
    },
  ];
  return useRoutes(routes);

  // return (
  //   <Routes>
  //     <Route path={path.homepage} element={<MainLayout />}>
  //       <Route index element={<Homepage />} />
  //       <Route path={path.recipes} element={<Recipes />} />
  //       <Route path={path.products} element={<Products />} />
  //       <Route path={path.productsSearch} element={<ProductsSearch />} />
  //       <Route path={path.about} element={<About />} />
  //     </Route>
  //   </Routes>
  // );
};

export default useRoutesElement;
