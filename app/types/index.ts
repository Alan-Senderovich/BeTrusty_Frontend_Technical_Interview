import { icons } from "@/components/Navbar";

export type TFetchStatus = 'idle' | 'loading' | 'failed' | 'success';

export type INavbarItem = {
  name: keyof typeof icons;
  url: string;
};

export interface IApartmentDetailsData {
  address: string;
  type: string;
  roomsQuantity: number;
  bathroomQuantity: number;
  hasWifi: boolean;
  hasFreeParking: boolean;
}

export interface IApartmentDetails {
  items: IApartmentDetailsData;
  description: string;
}

export interface IApartmentInfo {
  name: string;
  details: IApartmentDetails;
  pricePerNight: number;
  images: string[];
}

export interface IOwner {
  name: string;
}

export interface IApartment {
  id: string;
  apartment: IApartmentInfo;
  owner: IOwner;
}

