import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = `http://localhost:3000/products`;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`);
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product);
  }
  revmoveProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  }
  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.API_URL}/${product.id}`, product);
  }
}
