import React from 'react';
import { func, node, shape } from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { ToastContainer, toast } from 'react-toastify';

export const NotificationContext = React.createContext({});

const Notification = ({ children, intl }) => {
  const notify = ({ id, type, values }) =>
    toast[type](
      intl.formatMessage({ id: `notify.${type}.${id}` }, { ...(values || {}) }),
      { position: toast.POSITION.BOTTOM_RIGHT }
    );

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};

Notification.propTypes = {
  children: node.isRequired,
  intl: shape({
    formatMessage: func.isRequired,
  }).isRequired,
};

export default injectIntl(Notification);
