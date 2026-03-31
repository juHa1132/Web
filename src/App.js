import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import CvPage from './pages/CvPage';
import OfferPage from './pages/OfferPage';
import ContactPage from './pages/ContactPage';
import NieTylkoDlaSortowcowPage from './pages/NieTylkoDlaSortowcowPage';
import PolitykaPrywatnosciPage from './pages/PolitykaPrywatnosciPage';
// import LinksPage from './pages/LinksPage';


const  App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "/omnie",
          element: <CvPage />
        },
        {
          path: "/oferta",
          element: <OfferPage />
        },
        {
          path: "/kontakt",
          element: <ContactPage />
        },
        {
          path: "/nietylkosport",
          element: <NieTylkoDlaSortowcowPage />
        },
        {
          path: "/politykaprywatnosci",
          element: <PolitykaPrywatnosciPage />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
