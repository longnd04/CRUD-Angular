import { CommonModule } from '@angular/common';
import { IProduct } from '../../Iproduct';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products!: IProduct[];
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getProducts().subscribe((p) => (this.products = p));
  }
  onEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }
  onRemove(id: number) {
    const cf = confirm('are u ok');
    if (cf) {
      this.productService.revmoveProduct(id).subscribe(() => {
        alert('bu');
        this.products = this.products.filter((p) => p.id !== id);
      });
    }
  }
}
