import { ProductService } from './../../services/product.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Iproduct';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  form = this.formBuilder.group({
    name: [''],
    price: [0],
    description: [''],
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe((p) => {
        this.form.patchValue(p);
      });
    });
  }
  onSubmit() {
    const id = this.route.snapshot.params['id'];
    this.productService
      .editProduct({ id, ...this.form.value } as IProduct)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
