interface User {
  _id?: number;
  email: string;
  password: string;
}

interface Indagacoes {
  _id: number;
  User_id: number;
  name: string;
  specs: Array<{
    _id: number;
    name: string;
    metod: string;
  }>;
  objects: Array<{
    _id: number;
    name: string;
    descricion: string;
    valeus: Array<{
      _id: number;
      spec_id: number;
      value: number;
    }>;
    points: number;
  }>;
  result: number;
}
