import React, { useEffect, useState } from "react";
import My_profile from "./My_profile";
import { data } from "./data.jsx";
import { useFetcher } from "react-router-dom";

function Profile() {
  const [companyname, setcompanyname] = useState({});
  const [userDetails, setUserDetails] = useState("");
  const [address, setaddress] = useState({});
  const [geolocation, setgeolocation] = useState({});
  const [chatuser, setchatdata] = useState({});

  const getDetailsByName = (item) => {
    for (const user of data.users) {
      if (user.name === item) {
        return user;
      }
    }
    return null;
  };

  const getchatByName = (item) => {
    for (const user of data.users) {
      if (user.name === item) {
        setchatdata(user);
        return user;
      }
    }
    return null;
  };
  console.log(chatuser, "jitu");
  useEffect(() => {
    const item = localStorage.getItem("user");
    const foundUser = getDetailsByName(item);

    setUserDetails(foundUser);
    setcompanyname(foundUser.company);
    setaddress(foundUser.address);
    setgeolocation(foundUser.address.geo);
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <>
      <My_profile />
      <div id="container-2">
        <div id="container-2-header">
          <h3>Profile</h3>
          <div id="profile-header-container">
            <img
              src={userDetails.profilepicture}
              class="profile-picture"
              alt="profile"
            />
            <p>{userDetails.name}</p>
          </div>
        </div>
        <hr />
        <div id="profile-details-container">
          <div id="profile-details-information-container">
            <img
              src={userDetails.profilepicture}
              alt="profile"
              class="profile-picture1"
            />
            <p>{userDetails.name}</p>
            <div id="basic-details">
              <p>
                <span>Username</span>:&nbsp; &nbsp; {userDetails.username}{" "}
              </p>
              <p>
                <span>e-mail</span>:&nbsp; &nbsp; {userDetails.email}{" "}
              </p>
              <p>
                <span>Phone</span>:&nbsp; &nbsp; {userDetails.phone}{" "}
              </p>
              <p>
                <span>Website</span>:&nbsp; &nbsp; {userDetails.website}{" "}
              </p>
              <hr />
            </div>
            <p>Company</p>
            <div id="basic-details">
              <p>
                <span>Name</span>:&nbsp; &nbsp; {companyname.name}{" "}
              </p>
              <p>
                <span>catchPhrase</span>:&nbsp; &nbsp; {companyname.catchPhrase}{" "}
              </p>
              <p>
                <span>bs</span>:&nbsp; &nbsp; {companyname.bs}{" "}
              </p>
            </div>
          </div>
          <div id="profile-details-info-horizontal-line"></div>
          <div id="info-address-map-container">
            <p>Address :</p>
            <div id="basic-details">
              <p>
                <span>Street</span>:&nbsp; &nbsp; {address.street}{" "}
              </p>
              <p>
                <span>Suite</span>:&nbsp; &nbsp; {address.suite}{" "}
              </p>
              <p>
                <span>City</span>:&nbsp; &nbsp; {address.city}{" "}
              </p>
              <p>
                <span>Zip</span>:&nbsp; &nbsp; {address.zipcode}{" "}
              </p>
            </div>
            <div id="profile-info-map-container">
              <iframe
                class="map "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.701906820012!2d80.24014382593884!3d12.990908114452983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526787e5aeb737%3A0xdcee4dd1a4f89532!2sIITM%20RESEARCH%20PARK%2C%20Kanagam%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!5e0!3m2!1sen!2sin!4v1689395477294!5m2!1sen!2sin"
                width="800"
                height="350"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p id="lat-lng-container">
              Lat:-{geolocation.lat}&nbsp; &nbsp;
              <span>Lng:-{geolocation.lng}</span>{" "}
            </p>
            <div id="message-drop-section">
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        <img
                          src={chatuser.profilepicture}
                          class="profile-picture"
                        />
                        <p>{chatuser.name}</p>
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p style={{ color: "#9a9a9a", textAlign: "center" }}>
                        9:30am
                      </p>
                      <p>hello</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-send-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-group dropup ">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  backgroundColor: "#2c65c8",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p id="drop-container-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-left"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  </svg>{" "}
                  Chats
                </p>
              </button>

              <ul class="dropdown-menu">
                {data.users.map((item, index) => (
                  <li
                    key={index}
                    className="dropdown-item drop-info "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => getchatByName(item.name)}
                  >
                    <img
                      src={item.profilepicture}
                      alt="profile"
                      className="rounded-circle profile-picture"
                    />
                    <p>{item.name}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="#1eac61"
                      class="bi bi-dot"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
