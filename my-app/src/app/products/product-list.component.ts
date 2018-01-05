
import {Component,OnInit} from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
@Component({
templateUrl:'./product-list.component.html'
})

export class ProductListComponent implements OnInit{
  //varaibles   
 pageTitle:string ="Product List!!"
 imageWidth:number=50
 imageMargin:number=2
 showImage:boolean=false
 _listFilter:string;
 filteredProducts:IProduct[];
 products: IProduct[];
 errorMessage:string;

// private _productService:ProductService;
//Constructor
constructor(private _productService:ProductService)
{
    // this._productService=productService;
}   

//property
 get listFilter():string{
     return this._listFilter;
 }
 
 set listFilter(value : string) {
     this._listFilter = value;
     this.filteredProducts=this._listFilter?this.perFormFliter(this.listFilter):this.products;
 } 
 
 //page event
 ngOnInit(): void {
  this._productService.getProduct().subscribe(products=>{this.products=products;
    this.filteredProducts=this.products;},
    error=>this.errorMessage=<any>error);
  ;
 }

 onNotify(message:string):void{
     console.log(message);
 }

 //private methods
 perFormFliter(filterBy: string): IProduct[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);  
 }
 
toggleImage():void{
    this.showImage=!this.showImage
    }
}