import {Vendor} from "./types.ts"

export type AllVendorsResponse = {
    success: boolean;
    statusCode: number;
    message:string;
    data: {
      vendors: Vendor[];
    };
  };

<<<<<<< HEAD
  export type MessageResponse = {
    success: boolean;
    message: string;
  };
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
