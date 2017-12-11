
import {Component,OnInit} from "@angular/core";
import { IProduct } from "./product";


@Component({
selector: 'pm-products',
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
 products: IProduct[]=[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "/assets/images/cacke.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "/assets/images/camera.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "/assets/images/iphone.jpg"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "/assets/images/shoes.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "/assets/images/toy.jpg"
    }
]
//Constructor
constructor()
{
    this.filteredProducts=this.products;
    this.listFilter='cart';
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
    console.log("Method not implemented.");
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