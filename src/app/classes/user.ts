interface Geo {
  lat: number;
  lng: number;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export class User {
  id: number;
  name: string;
  username: string;
  address: Address;
}
