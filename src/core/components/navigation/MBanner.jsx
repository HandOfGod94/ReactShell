import React from "react";
import { Menu, Dropdown, Input } from "semantic-ui-react";

const menuStyle = {
  borderRadius: "0px",
  marginBottom: "0px"
};

function MBanner() {
  return (
    <Menu color="blue" inverted style={menuStyle}>
      <Menu.Item>
        <Menu.Header as="h2">brand.</Menu.Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown item text="System">
          <Dropdown.Menu>
            <Dropdown.Item text="Change Password" />
            <Dropdown.Item text="Logout" />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item icon="help" />
        <Menu.Item>
          <Input icon="search" placeholder="Search..." transparent inverted />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default MBanner;