import {Admin, User, Vendor, Venue, wishlist, Blog, Notification} from "./types.ts"


export type AllVendorsResponse = {
    success: boolean;
    statusCode: number;
    message:string;
    data: {
      vendors: Vendor[];
    };
  };


export type MessageResponse = {
  success: boolean;
  message: string;

};

export type VendorResponse = {

    success: boolean;
    statusCode: number;
    message:string;
    data: {
      vendor: Vendor;
    };
}

export type VenueResponse = {
  success: boolean;
  statusCode: number;
  message:string;
  data: {
    venue: Venue;
  };
}

export type AllVenuesResponse = {
  success: boolean;
  statusCode: number;
  message:string;
  data: {
    venues: Venue[];
  };
};

export type wishlistResponse = {
  success: boolean;
  statusCode: number;
  message:string;
}

export type UserResponse = {
  success: boolean;
  statusCode: number;
  message:string;
  data: {
    user: User[];
  };
}

export type AdminResponse = {
  success: boolean;
  statusCode: number;
  message:string;
  data: {
    admin: Admin[];
  };
}
  export type BlogResponse = {
    success: boolean;
    statusCode: number;
    message:string;
    data: {
      blog: Blog[];
    };
}

export type NotificationtResponse = {
  users:string[];
  status:string[];
  success: boolean;
  statusCode: number;
  message:string;
  data: Notification[]
}