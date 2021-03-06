import { Injectable } from '@angular/core';

import { Category, ProductModel } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductModel[] = [
    {
      category: Category.LAPTOP,
      name: 'asus',
      model: 'vivobook',
      id: 'M533IA-BQ007',
      color: 'grey',
      price: 19999,
      isAvailable: false,
      description: 'lorem.....'
    }, {
      category: Category.LAPTOP,
      name: 'asus',
      model: 'vivobook',
      id: 'K513EA-BQ163',
      color: 'hearty gold',
      price: 18799,
      isAvailable: true,
      description: 'lorem.....'
    }, {
      category: Category.LAPTOP,
      name: 'asus',
      model: 'ZenBook ',
      id: 'UM433IQ-A5048',
      color: 'grey',
      price: 31469,
      isAvailable: false,
      description: 'lorem.....'
    }, {
      category: Category.LAPTOP,
      name: 'lenovo',
      model: 'legion',
      id: '82B500GVRA',
      color: 'Phantom Black',
      price: 25999,
      isAvailable: true,
      description: 'lorem.....'
    }, {
      category: Category.LAPTOP,
      name: 'lenovo',
      model: 'yoga',
      id: '82A100HMRA',
      color: 'Orchid',
      price: 26499,
      isAvailable: true,
      description: 'lorem.....'
    }, {
      category: Category.LAPTOP,
      name: 'Dell',
      model: 'vostro',
      id: 'N306ZVN3591ERC_UBU',
      color: 'Black',
      price: 16499,
      isAvailable: true,
      description: 'lorem.....'
    }, {
      category: Category.MONITOR,
      name: 'Asus',
      model: 'Gaming',
      id: 'VG279Q1A',
      color: 'Black',
      price: 7747,
      isAvailable: true,
      description: 'lorem.....'
    }, {
      category: Category.MONITOR,
      name: 'Samsung',
      id: 'S24R350',
      color: 'Black',
      price: 3299,
      isAvailable: false,
      description: 'lorem.....'
    }, {
      category: Category.MONITOR,
      name: 'Acer',
      model: 'Nitro',
      id: 'EI242QRPbiipx',
      color: 'Black',
      price: 4899,
      isAvailable: true,
      description: 'lorem.....'
    }, {
      category: Category.MONITOR,
      name: 'Dell',
      id: 'SE2216H',
      color: 'Silver',
      price: 2777,
      isAvailable: true,
      description: 'lorem.....'
    }];
    titles: Array<string> = ['article', 'category', 'name', 'model', 'description', 'color', 'price', 'order'];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getTableColumnTitles(): Array<string> {
    return this.titles;
  }
}
