export interface ApartmentDetailsData {
  address: string;
  type: string;
  roomsQuantity: number;
  bathroomQuantity: number;
  hasWifi: boolean;
  hasFreeParking: boolean;
}

export interface ApartmentDetails {
  items: {
    address: string;
    type: string;
    roomsQuantity: number;
    bathroomQuantity: number;
    hasWifi: boolean;
    hasFreeParking: boolean;
  };
  description: string;
}

export interface Apartment {
  name: string;
  details: ApartmentDetails;
  valuePerNight: number;
  images: string[];
}

export interface Owner {
  name: string;
}

export interface DataItem {
  id: string;
  apartment: Apartment;
  owner: Owner;
}
