import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Providers = ({ children, initialRoutes }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialRoutes}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
