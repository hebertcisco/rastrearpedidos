import { Request, Response } from "express";

import firebase from "./firebase.config";

class FirestoreService {
  async read(req: Request, res: Response, collection, doc) {
    let stacksRef = firebase.collection(`${collection}`).doc(`${doc}`);
    let getDoc = stacksRef
      .get()
      .then(async (doc) => {
        if (!doc.exists) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          await res.end(JSON.stringify({ message: "No such document!" }));
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          await res.end(JSON.stringify(doc.data()));
        }
      })
      .catch(async (err) => {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        await res.end(JSON.stringify(err));
      });
  }
}

export default new FirestoreService();
