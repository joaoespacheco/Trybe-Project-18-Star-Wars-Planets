import React from "react";
import { render } from '@testing-library/react';
import DataProvider from "../../context/DataProvider";

export const renderWithContext = (component) => ({
  ...render(<DataProvider>{component}</DataProvider>),
});
