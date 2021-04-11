import React from 'react';
// eslint-disable-next-line no-unused-vars
import Link from 'react-router-dom';

import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
};

export const note = () => <Sidebar />;
export const twitter = () => <Sidebar cardType="twitters" />;
export const articles = () => <Sidebar cardType="articles" />;
