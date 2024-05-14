import { IApartment, TFetchStatus } from "@/types";

export interface IApartmentState {
  listOfApartments: IApartment[];
  selectedApartment?: IApartment | null;
  selectedStartDate?: string | null;
  selectedEndDate?: string | null;
  status: TFetchStatus;
}
