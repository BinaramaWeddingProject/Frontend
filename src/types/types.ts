export type Vendor = Partial<{
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  businessName: string;
  type_Of_Business: string;
  packages: {
    name: string;
    days: string;
    price: string;
    minAdvance: string;
  };
  portfolio: string[]; 
  experience: string;
  event_completed: number;
  willingToTravel: boolean;
  usp: string;
  summary: string;
  bookingPolicy: string;
  cancellationPolicy: string;
  termAndConditions: string;
  review: string; 
<<<<<<< HEAD
}>;

<<<<<<< HEAD
=======
}>;
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4
=======
//venue type

export interface Venue {
  yourName?: string;
  businessName?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  comment?: string;
  guestCapacity?: string;
  images?: string[];
  description?: string;
  about?: string;
  howToReach?: string;
  venueExpertNotes?: string;
  featuresOfVenue?: string;
  venuePolicies?: string;
  summary?: string;
  review?: string; // Assuming review and foodPackages are stored as string IDs
  foodPackages?: string;
  isPasswordCorrect?(password: string | Buffer): Promise<boolean>;
}
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588
