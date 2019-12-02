import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { ToastContainer, toast } from 'react-toastify';

export const NotificationContext = React.createContext({});

interface Props {
  intl: {
    formatMessage: ({ id }: { id: string }) => void
  }
}

const Notification: React.FC<Props> = ({ children, intl }) => {
  const notify = ({ id, type, values = {} }: { id: string, type: string, values: object }) =>
    toast[type](
      intl.formatMessage({ id: `notify.${type}.${id}` }, values),
      { position: toast.POSITION.BOTTOM_RIGHT }
    );

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};

export default injectIntl(Notification);
