import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { injectIntl } from 'react-intl';
import Basic from "../../../../containers/wizard/Basic";
import LastStepEnd from "../../../../containers/wizard/LastStepEnd";
import TopNavDisabled from "../../../../containers/wizard/TopNavDisabled";
import Validation from "../../../../containers/wizard/Validation";
import Layouts from "../../../../containers/wizard/Layouts";

class FormWizard extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb
              heading="menu.form-wizard"
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-5">
            <h5 className="mb-4">Basic</h5>
            <Basic />
          </Colxx>
          <Colxx xxs="12" className="mb-5">
            <h5 className="mb-4">Last Step End</h5>
            <LastStepEnd />
          </Colxx>
          <Colxx xxs="12" className="mb-5">
            <h5 className="mb-4">Top Navigation Disabled</h5>
            <TopNavDisabled />
          </Colxx>
          <Colxx xxs="12" className="mb-5">
            <h5 className="mb-4">Validation</h5>
            <Validation />
          </Colxx>
          <Colxx xxs="12" className="mb-5">
            <h5 className="mb-4">Layouts</h5>
            <Layouts />
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(FormWizard)
