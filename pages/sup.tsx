import { FC } from 'react';
import { Button } from '@material-ui/core';

const Sup: FC = () => {
  return (
      <>
      <button> I am normal button</button>
      <Button variant="contained">I am material </Button>
      </>
  );
};

export default Sup;