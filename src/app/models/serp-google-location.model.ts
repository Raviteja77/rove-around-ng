export interface SerpGoogleLocation {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  search_information: SearchInformation;
  place_results: PlaceResults;
}

export interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_maps_url: string;
  raw_html_file: string;
  total_time_taken: number;
}

export interface SearchParameters {
  engine: string;
  type: string;
  q: string;
  google_domain: string;
  hl: string;
}

export interface SearchInformation {
  local_results_state: string;
  query_displayed: string;
}

export interface PlaceResults {
  title: string;
  place_id: string;
  data_id: string;
  data_cid: string;
  reviews_link: string;
  photos_link: string;
  gps_coordinates: GpsCoordinates;
  place_id_search: string;
  provider_id: string;
  thumbnail: string;
  description: Description;
  address: string;
  weather: Weather;
  website: string;
  at_this_location: AtThisLocation[];
}

export interface GpsCoordinates {
  latitude: number;
  longitude: number;
}

export interface Description {
  snippet: string;
}

export interface Weather {
  celsius: string;
  fahrenheit: string;
  conditions: string;
}

export interface AtThisLocation {
  position: number;
  title: string;
  data_id: string;
  data_cid: string;
  reviews_link: string;
  photos_link: string;
  gps_coordinates: GpsCoordinates;
  place_id_search: string;
  rating: number;
  type?: string;
  price: string;
  thumbnail: string;
}
