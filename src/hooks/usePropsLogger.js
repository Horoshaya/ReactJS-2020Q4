import { useEffect } from 'react';

export const usePropsLogger = (props, message) => {
  useEffect(() => {
    if (!props) {
      console.warn(
        `${message}. Sorry, there are no any props in this component`,
      );
    } else {
      console.table([message, props]);
    }
  }, [props]);
};
