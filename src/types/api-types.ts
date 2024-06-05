import {Vendor, Venue} from "./types.ts"

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