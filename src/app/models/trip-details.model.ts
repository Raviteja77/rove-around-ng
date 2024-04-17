export interface TripDetails {
  id: number;
  tripCode: string;
  destination: string;
  startDate: string;
  endDate: string;
  traveler: Traveler[];
  places: any[];
  notes: any[];
  itinerary: Itinerary[];
  budget: Budget;
}

export interface Traveler {
  id: number;
  userName: string;
}

export interface Itinerary {
  date: string;
  places: any[];
  notes: any[];
}

export interface Budget {
  budgetAllocated: number;
  expenses: any[];
}
