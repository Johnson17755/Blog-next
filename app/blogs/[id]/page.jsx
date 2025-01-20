"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        // console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  // <div>{params.id}</div>
  return data ? (
    <>
      <main>
        <div className="bg-gray-200 py-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
            <Link href={`/`}>
              <Image
                src={assets.logo}
                alt="logo"
                width={180}
                className="w-[130px] sm:w-auto"
              />
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_000000]">
              Get Started <Image src={assets.arrow} alt="arrow" />
            </button>
          </div>
          <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
            <Image
              className="mx-auto mt-6 boder border-white rounded-full"
              src={data.author_img}
              width={60}
              height={60}
              alt="author"
            />
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
          </div>
        </div>
      </main>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt="img"
          className="border-4 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="mt-5 text-[18px] font-semibold">
          step 1: self-reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what your want to achieve. start by reflecting on
          your values,caspirations and long terms goals.
        </p>
        <h3 className="mt-5 text-[18px] font-semibold">
          step 2: self-reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what your want to achieve. start by reflecting on
          your values,caspirations and long terms goals.
        </p>
        <h3 className="mt-5 text-[18px] font-semibold">
          step 3: self-reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding of what your want to achieve. start by reflecting on
          your values,caspirations and long terms goals.
        </p>
        <h3 className="mt-5 text-[18px] font-semibold">conclusion:</h3>
        <p className="my-3">
          managing your lifestyle is a journey that requires committment and
          self-awareness. By following the step by step. you can take control of
          your life and take meaningful changes that lead to a more balanced and
          fulfilling lifestyle.Remember that it's okay to seek support and
          guidance from perfession or mentors along the way. Your well-being and
          happeness are worth the effort.
        </p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="facebook" />
            <Image src={assets.twitter_icon} width={50} alt="spaceX" />
            <Image src={assets.googleplus_icon} width={50} alt="google" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
