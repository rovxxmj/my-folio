import React from '@emotion/styled';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { light } from '@themes/themes';
import Header from '@components/Header';

interface IProps {
  children: React.ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={light}>
        <Header />
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default AppLayout;
