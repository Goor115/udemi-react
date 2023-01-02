import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayot = () => {
  return (
    <>
      <Menu />
      <Outlet />;
    </>
  );
};

export default MainLayot;
