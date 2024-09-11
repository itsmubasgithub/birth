import React, { useState } from "react";
import Single from "./Single";
import { data } from "./data";

const Birthday = () => {
  const [bdata, setBdata] = useState(data);

  const handleDelete = () => {
    if (bdata.length == 0) {
      setBdata(data);
    } else {
      setBdata([]);
    }
  };

  const remove = (id) => {
    const newData = bdata.filter((item, index) => {
      return item.id !== id;
    });

    setBdata(newData);
  };

  return (
    <>
      <div className="container p-2  mx-auto my-2 shadow col-md-5">
        <h2 className="display-5 text-info text-center fw-medium">
          {bdata.length} Todays Birthdays
        </h2>

        {bdata.map((item, index) => {
          return <Single rem={remove} {...item} key={item.id} />;
        })}

        <button
          onClick={() => handleDelete("data")}
          className={`btn ${
            bdata.length > 0 ? "btn-warning" : "btn-success"
          } my-2 d-block mx-auto w-50`}
        >
          {bdata.length > 0 ? "DELETE ALL" : "REFRESH"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
