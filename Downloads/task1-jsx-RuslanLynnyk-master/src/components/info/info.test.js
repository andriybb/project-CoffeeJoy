import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Info from "./info";

it("Renders without crashing", () => {
    const { getByTestId } = render(<Info />);
    expect(getByTestId("element-info")).toBeInTheDocument();
});

it("Renders Info correctly", () => {
    const { getByTestId } = render(<Info />);
    expect(getByTestId("element-info")).toHaveTextContent(
        "JSX produces React 'elements'"
    );
});
