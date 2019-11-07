import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby-plugin-intl';

import Layout from 'components/Layout';
import SEO from 'components/seo';

const SecondPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    fetch('http://localhost:3100/api/v1/beverage/')
      .then(response => response.json())
      .then(values => {
        console.log('values', values);
        setItems(values);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      {items.length ? (
        items.map(item => <div>{item.badge}</div>)
      ) : (
        <div>Loading...</div>
      )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
