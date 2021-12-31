import React, { useEffect, useState } from "react";

export default function SingleColor({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const backgroundColor = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  const handleHexClick = () => {
    setAlert(!alert);
    navigator.clipboard.writeText(`#${hex}`);
  };

  return (
    <div className="col-lg-3">
      <div
        className="card my-2 mx-2"
        style={{ backgroundColor: `rgb(${backgroundColor})` }}
      >
        <div className="card-body">
          <p
            className={`card-title ${index >= 9 ? "text-light" : "text-dark"}`}
          >
            {weight}%
          </p>
          {alert && (
            <p className="card-text text-secondary fs-0.2 mx-1">
              Hex value copied
            </p>
          )}
          <div
            className="border border-2 rounded-2 p-1"
            onClick={handleHexClick}
            style={{ cursor: "pointer", width: "50%" }}
          >
            <p
              className={`card-text text-center ${
                index >= 9 ? "text-light" : "text-dark"
              }`}
            >
              #{hex}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
