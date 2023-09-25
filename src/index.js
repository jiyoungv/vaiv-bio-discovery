import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'react-loading-skeleton/dist/skeleton.css'
import 'style/style.scss';
import Statistics from 'page/Statistics';
import EntitySearch from 'page/EntitySearch';
import RelationSearch from 'page/RelationSearch';
import SearchGPT from 'page/SearchGPT';
import TermsPolicies from 'page/TermsPolicies';
import Copyrights from 'page/Copyrights';
import ContactUs from 'page/ContactUs';

const theme = {
  token: {
    colorPrimary: '#186B53',
    fontFamily: 'inherit',
  },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <EntitySearch />,
  },
  {
    path: '/statistics',
    element: <Statistics />,
  },
  {
    path: '/relation-search',
    element: <RelationSearch />,
  },
  {
    path: '/search-gpt',
    element: <SearchGPT />,
  },
  {
    path: '/terms-policies',
    element: <TermsPolicies />,
  },
  {
    path: '/copyrights',
    element: <Copyrights />,
  },
  {
    path: 'contact-us',
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
