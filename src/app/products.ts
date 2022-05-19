export interface Product
{
  id: Number,
  name: string,
  price: number,
  description: string,
  url: string
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    url: 'https://www.samsung.com'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    url: 'https://www.apple.com'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    url: 'https://www.google.com'
  },
  {
    id: 4,
    name: 'Phone SE',
    price: 199,
    description: '',
    url: 'https://www.microsoft.com'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/