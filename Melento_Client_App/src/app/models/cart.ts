import { Product } from "./product";
export class Cart{
    _id:number
    userid:number
    uname:string
    uemail:string
    products:Array<Product>
    amount:number
    constructor(i:number,ui:number,un:string,e:string,p:Array<Product>,a:number){
        this._id=i
        this.userid=ui
        this.uname=un
        this.uemail=e
        this.products=p
        this.amount=a
    }
}