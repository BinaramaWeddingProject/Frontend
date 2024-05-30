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

=======
}>;
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4
