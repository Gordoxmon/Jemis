type User = {
  _id: number;
  email: string;
  password: string;
};

type Indagacoes = {
  _id: number;
  User_id: number;
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
};
