"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  // to store the data in the database
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex",
    authorImg: "/author_img.png",
  });

  // how to link onchangehandler: need to have the name, onchange and value property.
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append data to the FormData object
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      // Send the data to the server using axios
      const response = await axios.post("/api/blog", formData);

      // Handle success and error responses
      if (response.data.success) {
        toast.success(response.data.message); // Fixed typo in "message"
      } else {
        toast.error("Error occurred while creating the blog");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to submit the blog post");
    }

    // Optional: Log the data being sent for debugging
    console.log(data);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload"
            width={140}
            height={70}
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="write content here"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          className="w-40 mt-4 px-4 py-3 boder text-gray-500"
        >
          <option value="Startup">Start up</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white rounded-md"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default page;
