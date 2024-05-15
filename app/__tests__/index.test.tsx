import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store"; // Asegúrate de importar el store correcto
import HomePage from "@/app/page";
import { ApartmentDetailView, Gallery, Navbar, ReservationCard } from "@/components";
import { images } from "@/__mocks__";

const pricePerNightMock = 60;

describe("Home Page", () => {
  it("Should render Home Page correctly", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const container = screen.getByTestId("main-container");
    expect(container).toBeInTheDocument();
  });
});

describe("Apartment Detail View", () => {
  it("Should render the button correctly", () => {
    render(
      <Provider store={store}>
        <ApartmentDetailView />
      </Provider>
    );

    const str = screen.getByText(/invitar inquilino/i);
    expect(str).toBeInTheDocument();
  });
});

describe("Navbar component", () => {
  it("Should render settings button correctly", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    const btn = screen.getByTestId("settings-item-btn");
    expect(btn).toBeInTheDocument();
  });
});

describe("Gallery component", () => {
  it("Should open rooms details modal when the user clicks the properly button", () => {
    render(
      <Provider store={store}>
        <Gallery images={images} />
      </Provider>
    );

    const btnViewDetails = screen.getByTestId("view-rooms-details");
    fireEvent.click(btnViewDetails);
    const h3 = screen.getByRole("heading", {
      name: /Detalles/i,
    });

    expect(h3).toBeInTheDocument();
  });

  it("Should open view all images modal when the user clicks the properly button", () => {
    render(
      <Provider store={store}>
        <Gallery images={images} />
      </Provider>
    );

    const [btnViewAllImages] = screen.getAllByRole("button");
    fireEvent.click(btnViewAllImages);
    const carouselContainer = screen.getByTestId("carousel-container");

    expect(carouselContainer).toBeInTheDocument();
  });
});

describe("ReservationCard component", () => {
    it("Should render settings button correctly", () => {
      render(
        <Provider store={store}>
          <ReservationCard pricePerNight={pricePerNightMock}/>
        </Provider>
      );
  
      const btnCheckIn = screen.getByTestId("checkin-btn");
      fireEvent.click(btnCheckIn);
      const [str] = screen.getAllByText(/week/i);
      expect(str).toBeInTheDocument();
    });
  });
