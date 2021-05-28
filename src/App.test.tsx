import { render, screen } from "@testing-library/react";

import App from "App";

describe("<App/>", function () {
  test("renders the page title", function () {
    render(<App />);

    const heading = screen.getByText(/getting stuff done/i);
    expect(heading).toBeInTheDocument();
  });
});
