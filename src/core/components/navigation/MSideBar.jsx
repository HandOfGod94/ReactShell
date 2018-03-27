import React from "react";
import {Menu} from "semantic-ui-react";

const shellLayoutStyle = {
  border: "0px",
  borderRadius: "0px",
  height: "100%",
  margin: "0px"
};

function MSideBar() {
  return (
    <Menu vertical inverted style={shellLayoutStyle}>
      <Menu.Item>
        <Menu.Header>Solution Naviagation</Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            User Profile
          </Menu.Item>
          <Menu.Item name="settings"/>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Favorites</Menu.Header>
        <Menu.Menu>
          <Menu.Item name="fav1"/>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}

export default MSideBar;