class User{
  id: number;
  name: string;
  firstName: string;
  balance: number;

  constructor(id: number, name: string, firstName: string){
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.balance = 0;
  }
}

export default User;