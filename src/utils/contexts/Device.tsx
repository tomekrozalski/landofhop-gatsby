import React, { useEffect, useState } from 'react';

export const DeviceContext = React.createContext({});

async function supportsWebp() {
  // eslint-disable-next-line no-restricted-globals
  if (!self.createImageBitmap) return false;

  const webpData =
    'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

const Device: React.FC = ({ children }) => {
  const [webpSupport, setWebpSupport] = useState(false);

  useEffect(() => {
    (async () => {
      if (await supportsWebp()) {
        setWebpSupport(true);
      } else {
        setWebpSupport(false);
      }
    })();
  }, []);

  return (
    <DeviceContext.Provider value={{ webpSupport }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default Device;
