export type Product  = {
    id: number | null;
    name: string;
    description: string;
    price: number;
    creationDate: Date | null;
}

export const EMPTY_PRODUCT : Product = {
    id:null,
    name: '',
    description: '',
    price: 0,
    creationDate: null,
  }