export interface TripDetails {
  trip: Trip;
  travelers: Traveler[];
  tripLocations: any[];
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

export interface Itinerary {
  tripId: number;
  itineraryId: number;
  date: number;
  status: boolean;
  itineraryLocations: any[];
  itineraryNotes: any[];
}

export interface Budget {
  budgetId: number;
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
  note: string;
  status: boolean;
  createdBy: number;
  createdOn: number;
  updatedBy: number;
  updatedOn: number;
}
