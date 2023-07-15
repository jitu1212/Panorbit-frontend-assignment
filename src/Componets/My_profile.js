import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function My_profile() {
  const [backgroundColor1, setBackgroundColor1] = useState("");
  const [backgroundColor2, setBackgroundColor2] = useState("");
  const [backgroundColor3, setBackgroundColor3] = useState("");
  const [backgroundColor4, setBackgroundColor4] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/my-profile") {
      setBackgroundColor1("#EDEBFB");
    } else if (location.pathname === "/project") {
      setBackgroundColor2("#EDEBFB");
    } else if (location.pathname === "/galery") {
      setBackgroundColor3("#EDEBFB");
    } else if (location.pathname === "/to-go") {
      setBackgroundColor4("#EDEBFB");
    }
  }, [location]);

  return (
    <div id="container-1">
      <div id="container-1-container">
        {location.pathname === "/my-profile" ? (
          <div
            className="container-hover"
            onClick={() => navigate("/my-profile")}
            style={{ color: backgroundColor1 }}
          >
            <p>Profile</p>
            <hr />
          </div>
        ) : (
          <div
            className="container-hover"
            onClick={() => navigate("/my-profile")}
          >
            <p>Profile</p>
            <hr />
          </div>
        )}

        {location.pathname === "/project" ? (
          <div
            className="container-hover"
            onClick={() => navigate("/project")}
            style={{ color: backgroundColor2 }}
          >
            <p>Project</p>
            <hr />
          </div>
        ) : (
          <div className="container-hover" onClick={() => navigate("/project")}>
            <p>Project</p>
            <hr />
          </div>
        )}
        {location.pathname === "/gallery" ? (
          <div
            className="container-hover"
            onClick={() => navigate("/gallery")}
            style={{ color: backgroundColor3 }}
          >
            <p>Gallery</p>
            <hr />
          </div>
        ) : (
          <div className="container-hover" onClick={() => navigate("/gallery")}>
            <p>Gallery</p>
            <hr />
          </div>
        )}
        {location.pathname === "/to-go" ? (
          <div
            className="container-hover"
            onClick={() => navigate("/to-go")}
            style={{ color: backgroundColor4 }}
          >
            <p>To-Go</p>
            <hr />
          </div>
        ) : (
          <div
            className="container-hover"
            onClick={() => navigate("/to-go")}
          >
            <p>To-Go</p>
            <hr />
          </div>
        )}
      </div>
    </div>
  );
}

export default My_profile;
