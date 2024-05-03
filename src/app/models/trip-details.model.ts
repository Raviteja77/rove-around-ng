import { SerpGoogleLocation } from './serp-google-location.model';

export interface TripDetails {
  trip: Trip;
  travelers: Traveler[];
  tripLocations: TripLocation[];
  itineraries: Itinerary[];
  budget: Budget;
  expenses: Expense[];
  tripNotes: TripNote[];
}

export interface Trip {
  id: number;
  userId: number;
  tripCode: string;
  destination: string;
  destinationLongName: string;
  googleResponse: string;
  startDate: number;
  endDate: number;
  createdBy: number;
  createdOn: any;
  updatedBy: number;
  updatedOn: any;
  status: boolean;
}

export interface Traveler {
  userId: number;
  userName: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
}

export interface TripLocation {
  id: number;
  userId: number;
  googleResponse: string;
  position: number;
  tripId: number;
  status: boolean;
  serpGoogleResponse?: SerpGoogleLocation;
}

export interface Itinerary {
  tripId: number;
  itineraryId: number;
  date: number;
  status: boolean;
  itineraryLocations: ItineraryLocation[];
  itineraryNotes: ItineraryNote[];
}

export interface ItineraryLocation {
  id: number;
  userId: number;
  itineraryId: number;
  googleResponse: string;
  position: number;
  status: boolean;
  serpGoogleResponse?: SerpGoogleLocation;
}

export interface ItineraryNote {
  id: number;
  userId: number;
  itineraryId: number;
  note: string;
  status: boolean;
  createdBy: number;
  createdOn: any;
  updatedBy: number;
  updatedOn: any;
}

export interface Budget {
  id: number;
  tripId: number;
  amount: number;
  status: boolean;
}

export interface Expense {
  id: number;
  tripId: number;
  userId: number;
  categoryId: number;
  categoryDescription: string;
  paidOn: number;
  amount: number;
  splitType: string;
  status: boolean;
}

export interface TripNote {
  id: number;
  userId: number;
  tripId: number;
  note: any;
  status: boolean;
  createdBy: number;
  createdOn: any;
  updatedBy: number;
  updatedOn: any;
}
