import React, { Component } from "react";
import { injectIntl } from "react-intl";
import {
    Button,
    UncontrolledCollapse
  } from "reactstrap";
class QuestionAnswer extends Component {
    render() {
        return (
            <div>
                <Button
                    className="p-0 pb-2 font-weight-bold"
                    color="link"
                    id={this.props.data.key}>
                    <p className="mb-2">{this.props.data.question}</p>
                </Button>
                <UncontrolledCollapse toggler={"#" + this.props.data.key}>
                    <div className="pb-4">
                        {this.props.data.answer}
                    </div>
                </UncontrolledCollapse>
            </div>
        );
    }
}

export default injectIntl(QuestionAnswer);