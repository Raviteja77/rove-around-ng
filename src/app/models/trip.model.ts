import { SerpGoogleLocation } from './serp-google-location.model';

export interface Trip {
  id: number;
  tripCode: string;
  destination: string;
  destinationLongName: string;
  startDate: string;
  endDate: string;
  budget: number;
  tripStatus: string;
  numberOfDays: number;
  destinationImage: string;
  numberOfPlaces: number;
  numberOfUsers: number;
  googleResponse: string;
  serpGoogleResponse: SerpGoogleLocation;
}
