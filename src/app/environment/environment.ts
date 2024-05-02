const baseUrl = 'http://localhost:9090';

export const environment = {
  production: false,
  endpoints: {
    register: `${baseUrl}/api/v1/auth/register`,
    login: `${baseUrl}/api/v1/auth/login`,
    logout: `${baseUrl}/api/v1/auth/logout`,
    trip: `${baseUrl}/api/trip`,
    tripNotes: `${baseUrl}/api/trip-notes`,
    tripPlaceNotes: `${baseUrl}/api/trip-location-notes`,
    itineraryNotes: `${baseUrl}/api/itinerary-notes`,
    itineraryPlaceNotes: `${baseUrl}/api/itinerary-location-notes`,
    tripPlace: `${baseUrl}/api/trip-location`,
    itineraryPlace: `${baseUrl}/api/itinerary-location`,
  },
};
