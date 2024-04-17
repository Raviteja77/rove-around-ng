export const users = [
  {
    id: 1,
    userName: 'Snehith Padigelwar',
    email: 'snehith28@gmail.com',
    password: '1234',
    role: 'traveler',
    status: true,
  },
  {
    id: 2,
    userName: 'Tejasri Rachakonda',
    email: 'tejasri45@gmail.com',
    password: '1234',
    role: 'traveler',
    status: true,
  },
  {
    id: 3,
    userName: 'Raviteja Geddada',
    email: 'raviteja14@gmail.com',
    password: '1234',
    role: 'traveler',
    status: true,
  },
  {
    id: 4,
    userName: 'Harika',
    email: 'harika@gmail.com',
    password: '1234',
    role: 'traveler',
    status: true,
  },
];

export const trips = [
  {
    id: 1,
    tripCode: 'POKNAJ',
    destination: 'Paris',
    startDate: '2024-04-10',
    endDate: '2024-04-11',
    budget: 2000,
    destinationImage: 'paris.jpg',
    numberOfPlaces: 0,
    numberOfUsers: 3,
    tripStatus: '',
    numberOfDays: 0,
  },
  {
    id: 2,
    tripCode: 'LOKANS',
    destination: 'Hyderabad',
    startDate: '2024-05-15',
    endDate: '2024-05-17',
    budget: 3000,
    destinationImage: 'Hyderabad.jpg',
    numberOfPlaces: 0,
    numberOfUsers: 2,
    tripStatus: '',
    numberOfDays: 0,
  },
];

export const tripsDetails = [
  {
    id: 1,
    tripCode: 'POKNAJ',
    destination: 'Paris',
    startDate: '2024-04-10',
    endDate: '2024-04-11',
    traveler: [
      {
        id: 3,
        userName: 'Raviteja Geddada',
      },
      {
        id: 2,
        userName: 'Tejasri Rachakonda',
      },
      {
        id: 1,
        userName: 'Snehith Padigelwar',
      },
    ],
    places: [],
    notes: [],
    itinerary: [
      {
        date: '2024-04-10',
        places: [],
        notes: [],
      },
      {
        date: '2024-04-11',
        places: [],
        notes: [],
      },
    ],
    budget: {
      budgetAllocated: 2000,
      expenses: [],
    },
  },
  {
    id: 2,
    tripCode: 'LOKANS',
    destination: 'Hyderabad',
    startDate: '2024-05-15',
    endDate: '2024-05-17',
    traveler: [
      {
        id: 2,
        userName: 'Tejasri Rachakonda',
      },
      {
        id: 1,
        userName: 'Snehith Padigelwar',
      },
    ],
    places: [],
    notes: [],
    itinerary: [
      {
        date: '2024-05-15',
        places: [],
        notes: [],
      },
      {
        date: '2024-05-16',
        places: [],
        notes: [],
      },
      {
        date: '2024-05-17',
        places: [],
        notes: [],
      },
    ],
    budget: {
      budgetAllocated: 3000,
      expenses: [],
    },
  },
];
