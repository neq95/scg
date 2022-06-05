import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CircleDotsLoader from 'components/Loader/Circle/Dots';

import { useAppDispatch } from 'store';
import { getStatus } from 'store/slices/auth/selectors';
import { getUser } from 'store/slices/auth/thunks';
import { Statuses } from 'models/Enums/Statuses';
import { LoaderColors } from 'models/Enums/Loader';
import styles from './App.module.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const status = useSelector(getStatus);
  const isInitializing = status === Statuses.idle || status === Statuses.loading;

  useEffect(() => {
    if (status === Statuses.idle) {
      dispatch(getUser());
    }
  }, []);

  return (
    <>
      {isInitializing ? <div className={styles.loader}><CircleDotsLoader size="huge" color={LoaderColors.primary} /></div> : <Outlet />}
    </>
  );
};

export default App;
