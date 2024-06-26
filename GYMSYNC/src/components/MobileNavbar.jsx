import React, { useEffect, useState } from "react";
import { Home2 } from "iconsax-react";
import { User } from "iconsax-react";
import { Notification } from "iconsax-react";
import { CalendarSearch } from "iconsax-react";
import { Category } from "iconsax-react";
import { Link, json } from "react-router-dom";

const MobileNavbar = () => {
  let user = localStorage.getItem("user-gymSync");
  let parsedUser = JSON.parse(user);

  return (
    <div>
      <div className="mobileBarParent">
        <div className="mobileParent-container">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="mobileBarIcons">
              {/* HOME ICON */}
              <div className="iconDiv">
                <div className="bgIcons">
                  <Home2
                    className="insideIcons"
                    size="24"
                    style={{ transition: "color 0.3s", color: "#B8FF00" }}
                  />
                </div>
                <p>HOME</p>
              </div>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${parsedUser._id}`}
          >
            <div className="mobileBarIcons">
              {/* USER ICON */}
              <div className="iconDiv">
                <div className="bgIcons">
                  <User
                    className="insideIcons"
                    size="24"
                    style={{ transition: "color 0.3s", color: "#ffffff" }}
                  />
                </div>
                <p>PROFILE</p>
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/notification">
            <div className="mobileBarIcons">
              {/* NOTIFICATION ICON */}
              <div className="iconDiv">
                <div className="bgIcons">
                  <Notification
                    className="insideIcons"
                    size="24"
                    style={{ transition: "color 0.3s", color: "#ffffff" }}
                  />
                </div>
                <p>ADD</p>
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/history">
            <div className="mobileBarIcons">
              {/* HISTORY ICON */}
              <div className="iconDiv">
                <div className="bgIcons">
                  <CalendarSearch
                    className="insideIcons"
                    size="24"
                    style={{ transition: "color 0.3s", color: "#ffffff" }}
                  />{" "}
                </div>
                <p>HOME</p>
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="mobileBarIcons">
              {/* SETTINGS ICON */}
              <div className="iconDiv">
                <div className="bgIcons">
                  <Category
                    className="insideIcons"
                    size="24"
                    style={{ transition: "color 0.3s", color: "#ffffff" }}
                  />{" "}
                </div>
                <p>MENU</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
