import React from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './styles.css';

type Props = {
  className?: string;
  autoHide?: boolean;
}

const Scrollbar: React.FC<Props> = ({className, children, autoHide = true}) => {
  
  return (
    <SimpleBar className={className} autoHide={autoHide}>
      {children}
    </SimpleBar>
  );
};

export default Scrollbar;