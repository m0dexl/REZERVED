import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.flypgs.com/blog/wp-content/uploads/2019/03/antalya-tatil-yerleri.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Antalya</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/03/06175333/Istanbul.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>İstanbul</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn1.ntv.com.tr/gorsel/PiK1w50Mnk-DVNOBFEWGBw.jpg?width=1000&mode=crop&scale=both"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kuşadası</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
