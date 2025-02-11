// create api to manage DataTransfer.
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile } from "fs/promises";
const { NextResponse } = require("next/server");

//  store data in the database
const LOadDB = async () => {
  await ConnectDB();
};

LOadDB();

// apiend point to get all blogs
export async function GET(request) {
  const blogs = await BlogModel.find({}); //find all the blogs and store in the variable
  return NextResponse.json({ blogs }); //get all the blogs post
}

// apiend point for uploading/storing data blogs
export async function POST(request) {
  const formData = await request.formData(); //get the blog data
  const timestap = Date.now(); //get the current date and time

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer(); //convert the image in the bytedat. we want to store the image in public folder
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestap}_${image.name}`;
  await writeFile(path, buffer); //store in public folder
  const imgUrl = `./public/${timestap}_${image.name}`;
  console.log(imgUrl);

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("author")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added" });
}
