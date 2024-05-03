import { Budget, Expense, ItineraryNote, TripNote } from './trip-details.model';
import { Iuser } from './user.model';

export interface PopUpData {
  tripCode: string;
  type: string;
  typeId: number;
  operationType?: string;
  tripNotes?: TripNote;
  ItineraryNotes?: ItineraryNote;
  budget?: Budget;
  users?: Iuser[];
  expense?: Expense;
  expenses?: Expense[];
}
