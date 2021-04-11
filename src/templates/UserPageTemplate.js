import Sidebar from 'components/organisms/Sidebar/Sidebar';
import React from 'react';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

export default UserPageTemplate;
