import { NowRequest, NowResponse } from "@vercel/node";

import FirestoreService from "../../../../services/firestore.service";

async function handler(req: NowRequest, res: NowResponse) {
  if (req.method === "GET") {
    const { collection, doc } = req.query;
    await FirestoreService.read(req, res, collection, doc);
  }
}
export default handler;
