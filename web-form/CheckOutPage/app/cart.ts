import {Product} from './product';
import {PRODUCTS} from './products.data';


export class CartItem {
    product: Product;
    count: number;
    constructor(p: Product, count: number){
        this.product = p;
        this.count = count;
    };
    getTotal(): number {
        return this.count * this.product.price;
    };
}

export class Cart {
    items: CartItem[];

    constructor(){this.items = [];}

    count(): number {return this.items.length;}

    addItem(p: Product, count: number): void {
        var newItem = new CartItem(p, count);
        this.items.push(newItem);
    };

    findItemIndex(item: CartItem): number{
        var length = this.count();
        for(var i=0; i<length; i++){
            if(item=== this.items[i]){
                return i;
            }
        }
        return -1;
    }

    deleteItem(item: CartItem): void {
        var index = this.findItemIndex(item);
        if(index<0) {return;}
        this.items.splice(index, 1);
    }

    getTotal(): number {
        var total = 0;
        this.items.forEach(function(item){
            total += item.getTotal();
        });
        return total;
    }
}

