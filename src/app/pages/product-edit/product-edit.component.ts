import { ProductService } from './../../services/product.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
    name: ['', Validators.required, Validators.minLength(3)],
    price: [0, Validators.required],
    description: ['', Validators.required],
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
    if (this.form.invalid) return;
    const id = this.route.snapshot.params['id'];
    this.productService
      .editProduct({ id, ...this.form.value } as IProduct)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
