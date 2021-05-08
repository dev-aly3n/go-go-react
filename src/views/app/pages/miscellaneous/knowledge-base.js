import React, { Component, Fragment } from "react";
import { Row, Card, CardBody } from "reactstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { Separator, Colxx } from "../../../../components/common/CustomBootstrap";
import { injectIntl } from "react-intl";
import knowledgeBaseData from "../../../../data/knowledgebase"
import { NavLink } from "react-router-dom";

class KnowledgeBase extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.faq" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row className="equal-height-container">
                    {
                        knowledgeBaseData.map((item, index) => {
                            return (
                                <Colxx md="12" xl="6" className="mb-4 col-item" key={index}>
                                    <Card>
                                        <CardBody>
                                            <div className="text-center">
                                                <i className={item.icon + " large-icon"}></i>
                                                <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">{item.title}</h5>
                                            </div>
                                            <div className="pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1">
                                                <p className="text-muted mb-4">{item.detail}</p>
                                                <ul className="list-unstyled mb-0">
                                                    {
                                                        item.subtitles.map((subitem, index) => {
                                                            return <li key={index}><NavLink to={subitem.link} className="btn-link">{subitem.title}</NavLink></li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Colxx>
                            )
                        })
                    }
                </Row>
            </Fragment>
        );
    }
}
export default injectIntl(KnowledgeBase);
