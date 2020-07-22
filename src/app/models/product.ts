export class Product {

    constructor(
        public code: string,
        public name: string,
        public price: number,
        public rating: number,
        public available: boolean,
        public imageUrl: string
        ) {}
}

export const mockProduct: Product[] = [
    { code: '01', name: 'Name 01', price: 10000.5, available: true, rating: 1.0, imageUrl: 'aaa' },
    { code: '02', name: 'Name 02', price: 120.111, available: false, rating: 4.5, imageUrl: 'bbb' },
    { code: '03', name: 'Name 03', price: 130, available: true, rating: 2.0, imageUrl: 'ccc' }
];
