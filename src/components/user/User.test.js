import React from "react";
import { customRender, screen } from "../../utils/testHelper";
import * as Router from "react-router";

import User from "./User";

describe("User component", () => {
  const userData = {
    state: {
      login: "coco",
      name: "coco playa",
      picture: "https://avatars.githubusercontent.com/u/8480969?v=4",
      alt: "Avatar of user coco",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Router, "useLocation").mockImplementation(() => userData);
  });

  it("shows a user without repos", async () => {
    const { login, name, picture, alt } = userData.state;
    customRender(<User {...userData.state} />);
    const imgElement = await screen.getByRole("img");
    expect(imgElement.getAttribute("src")).toMatch(picture);
    expect(imgElement.getAttribute("alt")).toMatch(alt);
    expect(screen.getByLabelText("Search a new user")).toBeInTheDocument();
    expect(screen.getByText(`User ${login}`)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText("Amount of repositories:")).toBeInTheDocument();
    expect(screen.getByText("Repos")).toBeInTheDocument();
  });

  it("shows a user with repos", async () => {
    customRender(<User {...userData.state} />);
    expect(screen.getByTestId("repos-amount")).toHaveTextContent("Amount of repositories");
    expect(screen.getAllByRole("list").length).toBe(1);
  });
});
