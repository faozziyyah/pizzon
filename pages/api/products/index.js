import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {

  const { method } = req

  await dbConnect()

  switch (method) {

    case 'GET':
      try {
        const products = await Product.find({})
        res.status(200).json({ success: true, data: products })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'POST':
      try {
        const product = await Product.create(req.body)
        res.status(201).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }

  //try {
//
  //  console.log('CONNECTING TO MONGO');
  //  await dbConnect();
  //  console.log('CONNECTED TO MONGO');
//
  //  console.log('CREATING DOCUMENT');
  //  const test = await Product.create(req.body);
  //  console.log('CREATED DOCUMENT');
//
  //  res.json({ test });
  //} catch (error) {
  //  console.log(error);
  //  res.json({ error });
  //}

  //const { method, cookies } = req;

  //const token = cookies.token

  //dbConnect();

  //if (method === "GET") {
  //  try {
  //    const products = await Product.find();
  //    res.status(200).json(products);
  //  } catch (err) {
  //    res.status(500).json(err);
  //  }
  //} 

  //if (method === "POST") {
//
  //  /*if(!token || token !== process.env.token){
  //    return res.status(401).json("Not authenticated!")
  //  }*/
//
  //  try {
  //    const product = await Product.create(req.body);
  //    res.status(201).json(product);
  //  } catch (err) {
  //    res.status(500).json(err);
  //  }
  //}
}