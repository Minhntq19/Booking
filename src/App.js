import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Rio from './pages/Rio/Rio';
import Contact from './pages/Contact/Contact';
import Hotel from './pages/Hotel/Hotel';
import Detail from './pages/Detail/Detail';

function App() {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Home />,
      },
      {
         path: '/Login',
         element: <Login />,
      },
      {
         path: '/Register',
         element: <Register />,
      },
      {
         path: '/Rio',
         element: <Rio />,
      },
      {
         path: '/Contact',
         element: <Contact />,
      },
      {
         path: '/Hotel',
         element: <Hotel />,
      },
      {
         path: '/Hotel/room',
         element: <Outlet />,
         children: [
            {
               path: '/Hotel/room/standard',
               element: <Detail type='standard' roomType='Standard' size='230' bed='1' bedType='Double' price='150' />,
            },
            {
               path: '/Hotel/room/junior',
               element: <Detail type='junior' roomType='Junior' bath size='260' bed='2' bedType='Double' price='250' />,
            },
            {
               path: '/Hotel/room/superior',
               element: (
                  <Detail
                     type='superior'
                     roomType='Superior'
                     bath
                     kitchen
                     size='280'
                     bed='1'
                     bedType='King'
                     price='350'
                  />
               ),
            },
         ],
      },
   ]);
   return (
      <div>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
