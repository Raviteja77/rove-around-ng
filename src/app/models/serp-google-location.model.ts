export interface SerpGoogleLocation {
  place_results: PlaceResults;
}

export interface PlaceResults {
  title: string;
  gps_coordinates: GpsCoordinates;
  thumbnail: string;
  description: string;
  address?: string;
  website?: string;
  rating?: number;
  reviews?: number;
  open_state?: string;
  hours?: Hour[];
}

export interface Hour {
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
}

export interface GpsCoordinates {
  latitude: number;
  longitude: number;
}

export interface Description {
  snippet: string;
}
