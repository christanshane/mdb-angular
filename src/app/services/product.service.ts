import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Product } from '../product-model';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  products:Observable<Product[]>;
  productDoc:AngularFirestoreDocument<Product>;

  result:any;

  constructor(public angularFirestore:AngularFirestore) { 
    this.productsCollection = this.angularFirestore.collection('products');
    this.products = this.productsCollection.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getProducts(){
     return this.products;
   }

   addProduct(product:Product){
     this.productsCollection.add(product);
   }

   getProductDetails(id){
     return this.angularFirestore.doc<Product>('products/'+ id);
   }
}
