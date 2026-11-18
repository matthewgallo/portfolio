import type { ReactNode } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '../ThemeContext/ThemeContext';
import { router } from '../../router';

const AppWrapper = ({ children = null }: { children?: ReactNode }) => (
  <ThemeProvider>
    <div className="App mg-app">
      <RouterProvider router={router} />
    </div>
    {children}
  </ThemeProvider>
);

export default AppWrapper;
