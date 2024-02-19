import { render, screen } from "@testing-library/react";
import AppBanner from "../components/shared/AppBanner";

// This runs before each test. This is good instead of having the component render in each test case
const setup = () => render(<AppBanner />);

test("it shows the title in the banner", () => {
  setup();
  // We expect that the title 'Hi, Iam Stoman' is in the banner component
  expect(
    screen.getByText(/Hi, I am Ahmed Najeebat Opeyemi/i)
  ).toBeInTheDocument();
});
