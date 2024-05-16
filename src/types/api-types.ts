import {Vendor} from "./types.ts"

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

