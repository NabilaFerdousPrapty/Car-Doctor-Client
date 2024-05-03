import React from "react";
import slide1 from "../../../assets/images/banner/1.jpg";
import slide2 from "../../../assets/images/banner/2.jpg";
import slide3 from "../../../assets/images/banner/3.jpg";
import slide4 from "../../../assets/images/banner/4.jpg";
import slide5 from "../../../assets/images/banner/5.jpg";
import slide6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className=" my-10">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full rounded-xl">
          <img src={slide1} className="w-full" />
          <div className="w-full  absolute  flex justify-start items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500]  rounded-xl text-white">
            <div className="max-w-md ml-10 ">
            <h2 className="text-5xl py-4">
            Affordable Price For Car Servicing
            </h2>
            <p className="text-2xl py-4">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start gap-6 items-center py-4">
                <div className="btn bg-[#FF3811] text-white">
                Discover More
                </div>
                <div className="btn bg-transparent text-white">
                Latest Project
                </div>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide6" className="btn mr-5 btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>

        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" />
          <div className="w-full  absolute  flex justify-start items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500]  rounded-xl text-white">
            <div className="max-w-md ml-10 ">
            <h2 className="text-5xl py-4">
            Affordable Price For Car Servicing
            </h2>
            <p className="text-2xl py-4">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start gap-6 items-center py-4">
                <div className="btn bg-[#FF3811] text-white">
                Discover More
                </div>
                <div className="btn bg-transparent text-white">
                Latest Project
                </div>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn mr-5 btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full" />
          <div className="w-full  absolute  flex justify-start items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500]  rounded-xl text-white">
            <div className="max-w-md ml-10 ">
            <h2 className="text-5xl py-4">
            Affordable Price For Car Servicing
            </h2>
            <p className="text-2xl py-4">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start gap-6 items-center py-4">
                <div className="btn bg-[#FF3811] text-white">
                Discover More
                </div>
                <div className="btn bg-transparent text-white">
                Latest Project
                </div>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn mr-5 btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full" />
          <div className="w-full  absolute  flex justify-start items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500]  rounded-xl text-white">
            <div className="max-w-md ml-10 ">
            <h2 className="text-5xl py-4">
            Affordable Price For Car Servicing
            </h2>
            <p className="text-2xl py-4">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start gap-6 items-center py-4">
                <div className="btn bg-[#FF3811] text-white">
                Discover More
                </div>
                <div className="btn bg-transparent text-white">
                Latest Project
                </div>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn mr-5 btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slide5} className="w-full" />
          <div className="w-full  absolute  flex justify-start items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500]  rounded-xl text-white">
            <div className="max-w-md ml-10 ">
            <h2 className="text-5xl py-4">
            Affordable Price For Car Servicing
            </h2>
            <p className="text-2xl py-4">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start gap-6 items-center py-4">
                <div className="btn bg-[#FF3811] text-white">
                Discover More
                </div>
                <div className="btn bg-transparent text-white">
                Latest Project
                </div>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn mr-5 btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={slide6} className="w-full" />
          <div className="w-full  absolute  flex justify-start items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500]  rounded-xl text-white">
            <div className="max-w-md ml-10 ">
            <h2 className="text-5xl py-4">
            Affordable Price For Car Servicing
            </h2>
            <p className="text-2xl py-4">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start gap-6 items-center py-4">
                <div className="btn bg-[#FF3811] text-white">
                Discover More
                </div>
                <div className="btn bg-transparent text-white">
                Latest Project
                </div>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn mr-5 btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
