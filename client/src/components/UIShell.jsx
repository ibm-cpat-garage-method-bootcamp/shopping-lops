import React, { Component } from "react";
import {
  Content,
  Header,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell/";
import UIShellBody from "./UIShellBody";

class UIShell extends Component {
  header = "Menu Header";
  menuTitle = "Menu Title";
  menuItems = ["Simple List", "Item Two", "Item Three"];

  constructor(props) {
    super(props);
    this.state = {
      patternName: this.menuItems[0]
    };
  }

  onPatternSelection = label => {
    this.setState({ patternName: label });
  };

  renderSideNavItems = () => {
    return this.menuItems.map((label, index) => this.renderSideNavItem(label, index));
  };

  renderSideNavItem = (label, key) => {
    return (
      <SideNavMenuItem
        key={key}
        href="# "
        isActive={label === this.state.patternName ? true : false}
        onClick={e => this.onPatternSelection(label)}
      >
        {label}
      </SideNavMenuItem>
    );
  };

  render() {
    return (
      <div>
        <Header aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderName href="#" prefix="IBM">
            {this.header}
          </HeaderName>
        </Header>
        <SideNav aria-label="Side navigation">
          <SideNavItems>
            {this.renderSideNavItems()}
          </SideNavItems>
        </SideNav>
        <Content id="main-content">
          <UIShellBody patternName={this.state.patternName} />
        </Content>

      </div>
    );
  }
}

export default UIShell;
