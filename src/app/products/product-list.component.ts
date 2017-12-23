import {Component, OnInit} from '@angular/core'
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle : string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean;
    _filterText: string;
    errorMessage: string;
    get filterText(): string{
        return this._filterText;
    }
    set filterText(value: string){
        this._filterText = value;
        this.filteredProducts = this._filterText ? this.performFilter(this._filterText) : this.products;
    }
    constructor(private _productService : ProductService){
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    ngOnInit(): void{
        this._productService.getProducts().subscribe( products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this.errorMessage = <any> error);
        

    }

    toggleImage():void{
        this.showImage = !this.showImage
    }
    performFilter(filterText: string): IProduct[]{
        filterText = filterText.toLowerCase();
        return this.products.filter((product: IProduct) =>
                product.productName.toLowerCase().indexOf(filterText) !== -1)

    }
}