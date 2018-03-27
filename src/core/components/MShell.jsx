import React, { Component } from "react";
import { Tab, Container, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import MBanner from "./navigation/MBanner";
import MSideBar from "./navigation/MSideBar";

const rowStyle = {
  height: "100%",
  position: "fixed"
};

const contentStyle = {
  overflowY: "scroll",
  paddingBottom: "40px"
}

class MShell extends Component {
  state = {
    currentTab: 0
  };

  render() {
    let panes = [
      {
        menuItem: { key: "tab_1", icon: "close", content: "Tab 1" },
        render: () => (
          <Tab.Pane style={{ border: "0px" }}>
            <Container>
              {this.props.content}
            </Container>
          </Tab.Pane>
        )
      }
    ];

    let handleTabChange = (event, data) => {
      //remove close icon
      panes[this.state.currentTab].menuItem.icon = "";
      panes[data.activeIndex].menuItem.icon = "close";
      this.setState({
        currentTab: data.activeIndex
      });
    };

    return (
      <div>
        <MBanner />
        <Grid>
          <Grid.Row style={rowStyle}>
            <Grid.Column width={3}>
              <MSideBar />
            </Grid.Column>
            <Grid.Column width={13} style={contentStyle}>
              <Tab
                panes={panes}
                menu={{ secondary: true, pointing: true }}
                onTabChange={handleTabChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

MShell.propTypes = {
  content: PropTypes.element.isRequired
};

export default MShell;