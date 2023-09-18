import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Test Suites", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/My Store/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Searched 5 Solar Product", () => {
    const { getByText, getByRole } = render(<App />);

    // Search Bar
    const searchInput = getByRole("search");
    fireEvent.change(searchInput, { target: { value: "solar" } });

    // Click Search Button
    const searchButton = getByText(/search/i);
    fireEvent.click(searchButton);

    const product1 = getByText("SolarPod");
    expect(product1).toBeTruthy();

    const product2 = getByText("SunBloom Solar-Powered LED Lamp");
    expect(product2).toBeTruthy();

    const product3 = getByText("SolarFlare Portable Solar Charger");
    expect(product3).toBeTruthy();

    const product4 = getByText("SolarSage Energy-Efficient Heater");
    expect(product4).toBeTruthy();

    const product5 = getByText("SunHarvest Solar-Powered Water Heater");
    expect(product5).toBeTruthy();
  });
});
