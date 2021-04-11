/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import PageContext from 'context';

const MainTemplate = ({ children }) => {
  const location = useLocation().pathname;
  const [pageType, setPageType] = useState('notes');

  const setCurrentPage = () => {
    const pageTypes = ['twitters', 'articles', 'notes'];
    const [currentPage] = pageTypes.filter((page) => location.includes(page));

    setPageType(currentPage);
  };

  useEffect(() => {
    setCurrentPage();
  });

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>{children}</>
        </ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

export default MainTemplate;
