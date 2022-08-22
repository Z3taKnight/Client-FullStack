export class Supplier{
    _id:number
    sName:String
    sLocation:string
    sContact:number
    sEmail:string

    constructor(i:number,sN:string,sL:string,sC:number,sE:string){
        this._id=i;
        this.sName=sN;
        this.sLocation=sL;
        this.sContact=sC;
        this.sEmail=sE;
    }
}