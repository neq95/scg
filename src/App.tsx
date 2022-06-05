import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CircleDotsLoader from 'components/Loader/Circle/Dots';

import { useAppDispatch } from 'store';
import { getStatus } from 'store/slices/auth/selectors';
import { getUser } from 'store/slices/auth/thunks';
import { LoaderColors } from 'models/Enums/Loader';
import { Statuses } from 'models/Enums/Statuses';
import styles from './App.module.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status !== Statuses.succeeded) {
      loadUser();
    }
  }, []);

  const loadUser = async () => {
    setIsLoading(true);

    try {
      await dispatch(getUser());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {status === Statuses.idle || isLoading ? <div className={styles.loader}><CircleDotsLoader size="huge" color={LoaderColors.primary} /></div> : <Outlet />}
    </>
  );
};

export default App;
