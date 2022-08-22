export class users {
    _id: number;
    age: number;
    name: string;
    email: string;
    gender:string;
    address:string;
    password:string;
    role:string;
    
  
    constructor(
      idInp: number,
      uAgeInp: number,
      uNameInp: string,
      uEmailInp: string,
      uGenderInp: string,
      uAddressInp:string,
      uPassInp:string,
      uRoleInp:string
    ) {
      this._id = idInp;
      this.age=uAgeInp;
      this.name = uNameInp;
      this.email = uEmailInp;
      this.gender = uGenderInp;
      this.address=uAddressInp;
      this.password=uPassInp;
      this.role=uRoleInp
    }
  }