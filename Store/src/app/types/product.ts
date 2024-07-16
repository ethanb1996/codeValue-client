export type Product  = {
    id: number | null;
    name: string;
    description: string;
    price: number;
    creationDate: Date | null;
    img: string;
}

export const EMPTY_PRODUCT : Product = {
    id: null,
    name: '',
    description: '',
    price: 0,
    creationDate: null,
    img: '../assets/product1.jpg'
  }