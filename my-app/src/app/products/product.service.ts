import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService{

     _productUrl:string="assets/api/products/products.json"
    constructor(private http:HttpClient)
    {

    }
    getProduct():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this._productUrl)
                        .do(data=>console.log('All:'+JSON.stringify(data)))
                        .catch(this.handleError);
        // return [
        //     {
        //         "productId": 1,
        //         "productName": "Leaf Rake",
        //         "productCode": "GDN-0011",
        //         "releaseDate": "March 19, 2016",
        //         "description": "Leaf rake with 48-inch wooden handle.",
        //         "price": 19.95,
        //         "starRating": 3.2,
        //         "imageUrl": "/assets/images/cacke.jpg"
        //     },
        //     {
        //         "productId": 2,
        //         "productName": "Garden Cart",
        //         "productCode": "GDN-0023",
        //         "releaseDate": "March 18, 2016",
        //         "description": "15 gallon capacity rolling garden cart",
        //         "price": 32.99,
        //         "starRating": 4.2,
        //         "imageUrl": "/assets/images/camera.jpg"
        //     },
        //     {
        //         "productId": 5,
        //         "productName": "Hammer",
        //         "productCode": "TBX-0048",
        //         "releaseDate": "May 21, 2016",
        //         "description": "Curved claw steel hammer",
        //         "price": 8.9,
        //         "starRating": 4.8,
        //         "imageUrl": "/assets/images/iphone.jpg"
        //     },
        //     {
        //         "productId": 8,
        //         "productName": "Saw",
        //         "productCode": "TBX-0022",
        //         "releaseDate": "May 15, 2016",
        //         "description": "15-inch steel blade hand saw",
        //         "price": 11.55,
        //         "starRating": 3.7,
        //         "imageUrl": "/assets/images/shoes.jpg"
        //     },
        //     {
        //         "productId": 10,
        //         "productName": "Video Game Controller",
        //         "productCode": "GMG-0042",
        //         "releaseDate": "October 15, 2015",
        //         "description": "Standard two-button video game controller",
        //         "price": 35.95,
        //         "starRating": 4.6,
        //         "imageUrl": "/assets/images/toy.jpg"
        //     }
        // ]
    }

    private handleError(err:HttpErrorResponse)
    {
        console.log(err);
        return Observable.throw(err);
    }

}