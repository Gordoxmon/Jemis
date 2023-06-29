import React from "react";
import Card from "../server/Card";

interface Spec {
  _id: number;
  name: string;
  metod: string;
}

interface Value {
  _id: number;
  spec_id: number;
  value: number;
}

interface ObjectItem {
  _id: number;
  name: string;
  descricion: string;
  valeus: Value[];
  points: number;
}

interface Indagacoes {
  _id: number;
  User_id: number;
  specs: Spec[];
  objects: ObjectItem[];
  result: number;
}

interface ListaProps {
  data: Indagacoes[];
}

interface ObjectItemProps {
  object: ObjectItem;
}

interface ValueProps {
  value: Value;
}

function ObjectItemComponent({ object }: ObjectItemProps) {
  return (
    <div className="p-3 w-max">
      <div className="font-bold">Object_id: {object._id}</div>
      <div>Name: {object.name}</div>
      <div>Description: {object.descricion}</div>
      <div>Points: {object.points}</div>
      <div>
        {object.valeus && object.valeus.length > 0 && (
          <ul>
            {object.valeus.map((value) => (
              <ValueComponent key={value._id} value={value} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ValueComponent({ value }: ValueProps) {
  return (
    <li>
      _id: {value._id}, spec_id: {value.spec_id}, value: {value.value}
    </li>
  );
}

function Lista({ data }: ListaProps) {
  if (data.length === 0) {
    return (
      <h1 className="flex lg:col-span-4 align-middle justify-center text-4xl font-sans font-extrabold">
        Sem indagações...
      </h1>
    );
  }
  return (
    <>
      {data.map((item) => (
        <Card
          key={item._id}
          className="flex w-max p-8 rounded-xl bg-white shadow-md shadow-zinc-700 dark:bg-zinc-800 dark:shadow-md dark:shadow-zinc-600 relative"
        >
          <div>
            <div className="font-bold">Indagação_id: {item._id}</div>
            {item.objects.map((object) => (
              <ObjectItemComponent key={object._id} object={object} />
            ))}
          </div>
          <div className="w-max">
            <div className="font-bold">Specs:</div>
            {item.specs.map((spec) => (
              <div key={spec._id}>
                <div>Name: {spec.name}</div>
                <div>Metod: {spec.metod}</div>
              </div>
            ))}
            <div>
              <div className="font-bold">Result: {item.result}</div>
            </div>
          </div>
          <form action={"/api/indagacoes/apagar"}>
            <button
              className="absolute top-2 right-2 p-1 text-black outline outline-1 outline-zinc-800   hover:text-white hover:bg-zinc-900 dark:text-zinc-100 dark:outline-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 rounded-lg border-zinc-200 hover:shadow "
              value={item._id}
              id="id"
              name="id"
              type="submit"
            >
              Apagar
            </button>
          </form>
        </Card>
      ))}
    </>
  );
}

export default Lista;
