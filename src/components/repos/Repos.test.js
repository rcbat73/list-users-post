import React from "react";
import { customRender } from "../../utils/testHelper";
import { screen } from "@testing-library/react";

import Repos from "./Repos";

describe("Repos component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows 2 rows", async () => {
    const reposMock = [
      { name: "repo1", description: "Repo 1" },
      { name: "repo2", description: "Repo 2" },
    ];
    customRender(<Repos repos={reposMock} isFetching={false} />);
    expect(screen.getAllByRole("listitem").length).toBe(reposMock.length);
  });

  it("shows only the header row when an empty array is passed", async () => {
    const reposMock = [];
    customRender(<Repos repos={reposMock} />);
    expect(screen.getAllByRole("list").children).toBe(undefined);
  });
});
