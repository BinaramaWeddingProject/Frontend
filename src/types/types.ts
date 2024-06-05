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
}>;

//venue type

export interface Venue {
  _id:string;
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
  images: string[];
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

export interface wishlist{
  userId?: string,
  itemId?: string,
  itemType?:string
}

export interface User{
  _id:string;
  fullName?: string;
  email?: string;
  password?: string;
  phone?: string;
  city?: string;
}

