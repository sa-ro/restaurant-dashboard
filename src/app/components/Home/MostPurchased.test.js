import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MostPurchased from "./MostPurchased";

// Mock next/image to avoid issues in the test environment
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props) => <img {...props} alt={props.alt} />,
}));

// Mock dummyData.json
jest.mock("@/app/utils/Constants/dummyData.json", () => [
  {
    Order_ID: 101,
    Customer_Name: "John Doe",
    Items: [{ Item_Name: "Pizza" }, { Item_Name: "Burger" }],
  },
  {
    Order_ID: 102,
    Customer_Name: "Jane Doe",
    Items: [{ Item_Name: "Pizza" }, { Item_Name: "Pasta" }],
  },
]);

describe("MostPurchased Component", () => {
  test("renders the heading correctly", () => {
    render(<MostPurchased />);
    expect(
      screen.getByRole("heading", { name: /Top-Selling Products/i })
    ).toBeInTheDocument();
  });

  test("displays the top-selling products", async () => {
    render(<MostPurchased />);

    // Ensure all expected products appear
    expect(await screen.findByText("Pizza")).toBeInTheDocument();
    expect(await screen.findByText("Burger")).toBeInTheDocument();
    expect(await screen.findByText("Pasta")).toBeInTheDocument();
  });

  test("navigates using next and previous buttons", async () => {
    render(<MostPurchased />);

    // Wait for the items to load
    expect(await screen.findByText("Pizza")).toBeInTheDocument();

    // Select the navigation buttons using aria-label
    const nextButton = screen.getByRole("button", { name: /next/i });
    const prevButton = screen.getByRole("button", { name: /previous/i });

    // Click next button and check for new product visibility
    fireEvent.click(nextButton);
    expect(await screen.findByText("Burger")).toBeInTheDocument();

    // Click previous button and check if first product is visible again
    fireEvent.click(prevButton);
    expect(await screen.findByText("Pizza")).toBeInTheDocument();
  });
});
