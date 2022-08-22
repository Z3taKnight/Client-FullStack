export class Manufacturers{
    _id:number
    mName:string
    loc:string
    phn:number
    pointOfContact:string
    email:string
   
    constructor(i:number,mN:string,mL:string,mP:number,pC:string,mE:string){
        this._id=i
        this.mName=mN
        this.loc=mL
        this.phn=mP
        this.pointOfContact=pC
        this.email=mE
    }
}