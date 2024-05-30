import {Vendor, Venue} from "./types.ts"

export type AllVendorsResponse = {
    success: boolean;
    statusCode: number;
    message:string;
    data: {
      vendors: Vendor[];
    };
  };

<<<<<<< HEAD
<<<<<<< HEAD
  export type MessageResponse = {
=======
export type MessageResponse = {
  success: boolean;
  message: string;

};

export type VendorResponse = {
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588
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
<<<<<<< HEAD
=======
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
>>>>>>> 4c9dee31b5a2b54837007296cc4aeea005987ee4
=======
}

export type AllVenuesResponse = {
  success: boolean;
  statusCode: number;
  message:string;
  data: {
    venues: Venue[];
  };
};
>>>>>>> b8ea3ec828a077fc2cb6d9155852aea1e37b0588
