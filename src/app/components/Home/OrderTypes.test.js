import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderTypes from "./OrderTypes";

// Mock Constants
jest.mock("@/app/utils/Constants/common", () => ({
  ONLINE: "Online",
  DINE_IN: "Dine-in",
}));

// Mock Helper Function
jest.mock("@/app/utils/Helpers/helpers", () => ({
  filterOrdersByType: (type) =>
    type === "Online"
      ? [
          { Order_ID: 1, Customer_Name: "Alice", Items: [{ Item_Name: "Pizza" }] },
          { Order_ID: 2, Customer_Name: "Bob", Items: [{ Item_Name: "Burger" }] },
        ]
      : [
          { Order_ID: 3, Customer_Name: "Charlie", Items: [{ Item_Name: "Pasta" }] },
        ],
}));

// Mock OrdersListCard Component
// eslint-disable-next-line react/display-name
jest.mock("../Shared/OrdersList", () => ({ orders }) => (
  <div data-testid="order-item">{orders.Customer_Name}</div>
));

describe("OrderTypes Component", () => {
  test("renders the heading correctly", () => {
    render(<OrderTypes />);
    expect(
      screen.getByRole("heading", { name: /Order Variations/i })
    ).toBeInTheDocument();
  });

  test("displays the correct number of orders in each tab", () => {
    render(<OrderTypes />);

    // Check initial order counts
    expect(screen.getByText(/Online \(2\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Offline \(1\)/i)).toBeInTheDocument();
  });

  test("displays orders based on the active tab", () => {
    render(<OrderTypes />);

    // Initially, Online tab is active
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.queryByText("Charlie")).not.toBeInTheDocument();

    // Click Offline Tab
    fireEvent.click(screen.getByText(/Offline/i));

    // Now Offline orders should appear
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).not.toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });

  test("switches between tabs correctly", () => {
    render(<OrderTypes />);

    const onlineTab = screen.getByText(/Online/i);
    const offlineTab = screen.getByText(/Offline/i);

    // Initially, Online tab should be active
    expect(onlineTab).toHaveClass("bg-gray-800 text-white");
    expect(offlineTab).not.toHaveClass("bg-gray-800 text-white");

    // Click Offline Tab
    fireEvent.click(offlineTab);

    // Offline tab should now be active
    expect(offlineTab).toHaveClass("bg-gray-800 text-white");
    expect(onlineTab).not.toHaveClass("bg-gray-800 text-white");

    // Click Online Tab again
    fireEvent.click(onlineTab);

    // Online tab should be active again
    expect(onlineTab).toHaveClass("bg-gray-800 text-white");
    expect(offlineTab).not.toHaveClass("bg-gray-800 text-white");
  });
});
