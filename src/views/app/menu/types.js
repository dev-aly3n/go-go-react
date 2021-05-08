import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { Row, Button } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import {
  setContainerClassnames,
  changeDefaultClassnames
} from "../../../redux/actions";
import IntlMessages from "../../../helpers/IntlMessages";

class MenuTypes extends Component {
  changeDefaultMenuType = (e, containerClassnames) => {
    e.preventDefault();
    let nextClasses = this.getMenuClassesForResize(containerClassnames);
    this.props.setContainerClassnames(
      0,
      nextClasses.join(" "),
      this.props.selectedMenuHasSubItems
    );
  };
  getMenuClassesForResize = classes => {
    const { menuHiddenBreakpoint, subHiddenBreakpoint } = this.props;
    let nextClasses = classes.split(" ").filter(x => x !== "");
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push("menu-mobile");
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter(x => x !== "menu-mobile");
      if (
        nextClasses.includes("menu-default") &&
        !nextClasses.includes("menu-sub-hidden")
      ) {
        nextClasses.push("menu-sub-hidden");
      }
    } else {
      nextClasses = nextClasses.filter(x => x !== "menu-mobile");
      if (
        nextClasses.includes("menu-default") &&
        nextClasses.includes("menu-sub-hidden")
      ) {
        nextClasses = nextClasses.filter(x => x !== "menu-sub-hidden");
      }
    }
    return nextClasses;
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.types" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Button
              outline
              color="primary"
              className="mb-2"
              onClick={e => this.changeDefaultMenuType(e, "menu-default")}
            >
              <IntlMessages id="menu.default" />
            </Button>{" "}
            <Button
              outline
              color="primary"
              className="mb-2"
              onClick={e => this.changeDefaultMenuType(e, "menu-sub-hidden")}
            >
              <IntlMessages id="menu.subhidden" />
            </Button>{" "}
            <Button
              outline
              color="primary"
              className="mb-2"
              onClick={e => this.changeDefaultMenuType(e, "menu-hidden")}
            >
              <IntlMessages id="menu.hidden" />
            </Button>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems
  } = menu;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    selectedMenuHasSubItems
  };
};

export default connect(
  mapStateToProps,
  {
    setContainerClassnames,
    changeDefaultClassnames
  }
)(MenuTypes);
