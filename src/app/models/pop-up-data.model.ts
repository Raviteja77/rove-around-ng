import { Budget, ItineraryNote, TripNote } from './trip-details.model';

export interface PopUpData {
  tripCode: string;
  type: string;
  typeId: number;
  operationType?: string;
  tripNotes?: TripNote;
  ItineraryNotes?: ItineraryNote;
  budget?: Budget;
}
