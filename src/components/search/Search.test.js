import React from "react";
import { customRender } from "../../utils/testHelper";
import { screen } from "@testing-library/react";

import Search from "./Search";

const userMock = {
  login: "coco",
  name: "coco",
  picture: "https://avatars.githubusercontent.com/u/8480969?v=4",
  alt: "Avatar of user coco",
};

describe("Search component", () => {
  it("renders an h1 tag and a form with an input field and a button", async () => {
    customRender(<Search />);
    expect(screen.getByText("Search for user")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Form for searching a user")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("User name")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
