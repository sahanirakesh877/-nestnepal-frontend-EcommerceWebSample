import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="border-bottom text-center pt-5 pb-2 text-danger">
              Our Product Slider
            </h3>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <div class="owl-carousel owl-theme">
          <div class="item ">
            <img src="../shops/shops-1.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-2.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-3.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-4.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-5.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-6.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-7.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-8.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-5.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-4.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-9.png" alt="..loading" />
          </div>
          <div class="item">
            <img src="../shops/shops-10.png" alt="..loading" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
