import React, { Component, Fragment } from "react";
import { Row, Collapse, Card, Button } from "reactstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { Separator, Colxx } from "../../../../components/common/CustomBootstrap";
import faqData from "../../../../data/faq"
import { injectIntl } from "react-intl";

class Faq extends Component {
    constructor(props) {
        super(props);
        let accordionData = [];
        faqData.forEach(() => {
            accordionData.push(false);
        });
        accordionData[0] = true;
        this.state = {
            collapse: false,
            accordion: accordionData
        };
    }

    toggleAccordion = tab => {
        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => (tab === index ? !x : false));
        this.setState({
            accordion: state
        });
    };

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.faq" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>

                    <Colxx xxs="12" className="mb-4">
                        <Fragment>
                            {
                                faqData.map((item, index) =>{
                                    return (
                                        <Card className="d-flex mb-3" key={index}>
                                            <div className="d-flex flex-grow-1 min-width-zero">
                                                <Button color="link" className="card-body  btn-empty btn-link list-item-heading text-left text-one"
                                                    onClick={() => this.toggleAccordion(index)}
                                                    aria-expanded={this.state.accordion[index]}>
                                                    {item.question}
                                                </Button>
                                            </div>
                                            <Collapse isOpen={this.state.accordion[index]}>
                                                <div className="card-body accordion-content pt-0" dangerouslySetInnerHTML={{__html: item.answer}}/>
                                            </Collapse>
                                        </Card>
                                    )
                                })
                            }
                        </Fragment>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}
export default injectIntl(Faq);
