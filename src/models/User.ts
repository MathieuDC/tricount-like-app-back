class User{
  id?: string;
  name: string;
  firstName: string;
  balance: number;

  constructor(name: string, firstName: string, id?: string){
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.balance = 0;
  }


  setId(id: string){
    this.id = id;
  }
  
}

export default User;