import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle:string="Details";
  product:IProduct;

  constructor( private route:ActivatedRoute ) { 
   
  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.pageTitle +=`:${id}`;
    this.product={
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "/assets/images/cacke.jpg"
    };

  }

}
