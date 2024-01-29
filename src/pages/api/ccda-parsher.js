// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// var bb = require("@amida-tech/blue-button")

import bb from "@rlyle1179/blue-button";

export default function handler(req, res) {
  try {
    var doc = bb.parse(req.body);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).send(error);
  }

}
