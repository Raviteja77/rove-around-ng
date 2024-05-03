const baseUrl = 'http://localhost:9090';

export const environment = {
  production: false,
  endpoints: {
    register: `${baseUrl}/api/v1/auth/register`,
    login: `${baseUrl}/api/v1/auth/login`,
    logout: `${baseUrl}/api/v1/auth/logout`,
    trip: `${baseUrl}/api/trip`,
    tripNotes: `${baseUrl}/api/trip-notes`,
    itineraryNotes: `${baseUrl}/api/itinerary-notes`,
    tripPlace: `${baseUrl}/api/trip-locations`,
    itineraryPlace: `${baseUrl}/api/itinerary-locations`,
    budgetApi: `${baseUrl}/api/budget`,
    expenseApi: `${baseUrl}/api/expense`,
  },
};
