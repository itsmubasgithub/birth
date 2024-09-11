import React from "react";

const Single = ({ id, name, image, age, rem }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="left">
          <div className="d-flex align-items-center gap-2">
            <img
              width={60}
              height={60}
              className="rounded-circle"
              src={image}
              alt=""
            />
            <div className="d-flex flex-column">
              <h2 className="text-danger fs-5  m-0">{name}</h2>
              <p className="text-dark  m-0">{age}Years Old</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button onClick={() => rem(id)} className="btn btn-primary">
            Bhari Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Single;
