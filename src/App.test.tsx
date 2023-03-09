import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("loads and displays greeting", async () => {
    render(<App />);
});
