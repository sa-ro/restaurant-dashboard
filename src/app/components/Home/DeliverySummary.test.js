import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DeliverySummary from "./DeliverySummary";

// Mocking the dummy JSON data
jest.mock("@/app/utils/Constants/dummyData.json", () => ([
  { Order_ID: 101, Customer_Name: "John Doe", Delivery_Status: "Delivered" },
  { Order_ID: 102, Customer_Name: "Jane Doe", Delivery_Status: "Pending" },
]), { virtual: true });

describe("DeliverySummary Component", () => {
  test("renders the Delivery Summary heading", () => {
    render(<DeliverySummary />);
    expect(screen.getByText("Delivery Summary")).toBeInTheDocument();
  });

  test("renders the table headers", () => {
    render(<DeliverySummary />);
    expect(screen.getByText("Order ID")).toBeInTheDocument();
    expect(screen.getByText("Customer Name")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  test("renders orders from the dummy JSON data", () => {
    render(<DeliverySummary />);
    expect(screen.getByText("#101")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Delivered")).toBeInTheDocument();

    expect(screen.getByText("#102")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  test("shows correct delivery status with emoji", () => {
    render(<DeliverySummary />);
    
    expect(screen.getByLabelText("delivered")).toBeInTheDocument(); 
    expect(screen.getByLabelText("pending")).toBeInTheDocument();   
  });
});
