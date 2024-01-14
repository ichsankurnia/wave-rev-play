import { FC } from 'react';
import { RouterProvider } from "react-router-dom";
import router from './route';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const App: FC<Props> = () => {

  return (
    <>
      <div className='font-poppins'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;