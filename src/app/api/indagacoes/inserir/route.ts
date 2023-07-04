import { NextResponse } from "next/server";

import { InsertIndagacoes } from "../../data/mongodb/mongo";
import { redirect } from "next/navigation";
/* começo do desenvolvimento das funçoes da base de dados */

export async function GET(req: Request, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  let user = searchParams.get("User_id");
  var x = "32";
  const User: number = +user;
  console.log(User);
  console.log("ola");
  const name = searchParams.get("name") as string;
  const nameObj1 = searchParams.get("nameObj1") as string;
  const nameObj2 = searchParams.get("nameObj2") as string;
  const descObj1 = searchParams.get("descObj1") as string;
  const descObj2 = searchParams.get("descObj2") as string;
  const res1Obj1 = searchParams.get("res1Obj1") as string;
  const res1Obj2 = searchParams.get("res1Obj2") as string;
  const res2Obj1 = searchParams.get("res2Obj1") as string;
  const res2Obj2 = searchParams.get("res2Obj2") as string;
  const specs1 = searchParams.get("specs1") as string;
  const specs2 = searchParams.get("specs2") as string;
  const method1 = searchParams.get("method1") as string;
  const method2 = searchParams.get("method2") as string;
  let pointsObj1: number = 0;
  let pointsObj2: number = 0;
  let result: number;
  if (method1 === ">") {
    if (res1Obj1 > res1Obj2) {
      pointsObj1 = pointsObj1 + 1;
    } else if (res1Obj1 < res1Obj2) {
      pointsObj2 = pointsObj2 + 1;
    }
  } else if (method1 === "<") {
    if (res1Obj1 < res1Obj2) {
      pointsObj1 = pointsObj1 + 1;
    } else if (res1Obj1 > res1Obj2) {
      pointsObj2 = pointsObj2 + 1;
    }
  }
  if (pointsObj1 > pointsObj2) {
    result = 0;
  } else if (pointsObj1 < pointsObj2) {
    result = 1;
  } else result = -1;

  const db = await InsertIndagacoes();
  const data = await db.findOne(
    {},
    { sort: { _id: -1 }, projection: { _id: 1 } }
  );
  const _id = data._id + 1;
  console.log(data._id);
  let dados;
  dados = {
    _id: _id,
    User_id: User,
    name,
    specs: [
      {
        _id: 0,
        name: specs1,
        metod: method1,
      },
      {
        _id: 1,
        name: specs2,
        metod: method2,
      },
    ],
    objects: [
      {
        _id: 0,
        name: nameObj1,
        descricion: descObj1,
        valeus: [
          {
            _id: 0,
            spec_id: 0,
            value: res1Obj1,
          },
          {
            _id: 1,
            spec_id: 1,
            value: res2Obj1,
          },
        ],
        points: pointsObj1,
      },
      {
        _id: 1,
        name: nameObj2,
        descricion: descObj2,
        valeus: [
          {
            _id: 0,
            spec_id: 0,
            value: res1Obj2,
          },
          {
            _id: 1,
            spec_id: 1,
            value: res2Obj2,
          },
        ],
        points: pointsObj2,
      },
    ],
    result: result,
  };

  db.insertOne(dados);
  redirect("/");
}
