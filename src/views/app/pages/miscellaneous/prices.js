import React, { Component, Fragment } from "react";
import { Row, CardTitle } from "reactstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { Separator, Colxx } from "../../../../components/common/CustomBootstrap";
import { pricesData } from "../../../../data/prices"
import PriceCard from "../../../../components/cards/PriceCard";
import FeatureComparison from "../../../../containers/pages/FeatureComparison";
import IntlMessages from "../../../../helpers/IntlMessages";
import { injectIntl } from "react-intl";
import {defaultLocale} from '../../../../constants/defaultValues'

const locale = localStorage.getItem('currentLanguage') || defaultLocale;
class Prices extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.prices" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row className="equal-height-container mb-5">
                    <Colxx xxs="12">
                        <CardTitle>
                            <IntlMessages id="pages.prices.pricecomparison" />
                        </CardTitle>
                    </Colxx>
                    {
                        pricesData[locale].map((item, index) => {
                            return (
                                <Colxx md="12" lg="4" className="col-item mb-4" key={index}>
                                    <PriceCard data={item} />
                                </Colxx>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Colxx xxs="12">
                        <CardTitle>
                            <IntlMessages id="pages.prices.featurecomparison" />
                        </CardTitle>
                    </Colxx>
                    <FeatureComparison />
                </Row>
            </Fragment>
        );
    }
}
export default injectIntl(Prices);
