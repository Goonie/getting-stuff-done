import { render, screen } from "@testing-library/react";

import Dashboard from "pages/Dashboard";

describe("<Dashboard/>", function () {
  test("renders the page title", function () {
    render(<Dashboard />);

    const heading = screen.getByText(/dashboard/i);
    expect(heading).toBeInTheDocument();
  });
});
