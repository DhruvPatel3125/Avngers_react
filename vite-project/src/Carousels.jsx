import React from 'react';

const Carousels = () => {
  return (
    <div className="container mt-4">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide shadow-lg rounded-3"
        data-bs-ride="carousel"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://wallpapers.com/images/hd/4k-marvel-digital-cartoon-t9z4pnuivn6488jq.jpg"
              className="d-block w-100 rounded"
              alt="First Slide"
            />
            <div className="carousel-caption d-none d-md-block text-white bg-dark bg-opacity-75 p-3 rounded">
              <h5>The Avengers</h5>
              <p>Unite to save the world!</p>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://wallpapersok.com/images/hd/epic-moment-from-avengers-in-4k-jcm1nji0j5z8qx6n.jpg"
              className="d-block w-100 rounded"
              alt="Second Slide"
            />
            <div className="carousel-caption d-none d-md-block text-white bg-primary bg-opacity-50 p-3 rounded">
              <h5>Team Marvel</h5>
              <p>Heroes assembled to protect Earth.</p>
            </div>
          </div>
          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src="https://wallpapers.com/images/featured/4k-avengers-gx5riyd6eqklm4hf.jpg"
              className="d-block w-100 rounded"
              alt="Third Slide"
            />
            <div className="carousel-caption d-none d-md-block text-white bg-success bg-opacity-50 p-3 rounded">
              <h5>Epic Battles</h5>
              <p>Witness the might of the Avengers.</p>
            </div>
          </div>
        </div>
        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousels;
