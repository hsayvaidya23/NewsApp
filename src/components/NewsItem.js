import React from "react";

function NewsItem({ mode, setMode, ...props }) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          backgroundColor: mode === "dark" ? "black" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://static.toiimg.com/thumb/msid-89447573,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-56260/89447573.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">{description} </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
