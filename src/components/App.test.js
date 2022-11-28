import React from "react";
import { customRender, screen } from "../utils/testHelper";

import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("navigates to the search user page", async () => {
    customRender(<App />, { initialRoutes: ["/"] });
    expect(screen.getByText("Search for user")).toBeInTheDocument();
  });

  it("redirect to the search user page if '/user' route if visited directly", async () => {
    customRender(<App />, { initialRoutes: ["/user"] });
    expect(screen.getByText("Search for user")).toBeInTheDocument();
  });
});
