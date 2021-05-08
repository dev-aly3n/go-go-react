
import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import Lightbox from 'react-image-lightbox';
import { NavLink } from "react-router-dom";
import {
    Row
} from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";

const images1 = [
    '/assets/img/tea-loaf.jpg',
    '/assets/img/magdalena.jpg',
    '/assets/img/marble-cake.jpg',
    '/assets/img/parkin.jpg',
    '/assets/img/napoleonshat.jpg',
    '/assets/img/fruitcake.jpg'
];

const thumbs1 = [
    '/assets/img/tea-loaf-thumb.jpg',
    '/assets/img/magdalena-thumb.jpg',
    '/assets/img/marble-cake-thumb.jpg',
    '/assets/img/parkin-thumb.jpg',
    '/assets/img/napoleonshat-thumb.jpg',
    '/assets/img/fruitcake-thumb.jpg'
]

const images2 = [
    '/assets/img/fruitcake.jpg',
    '/assets/img/napoleonshat.jpg',
    '/assets/img/tea-loaf.jpg',
    '/assets/img/magdalena.jpg'
];

const thumbs2 = [
    '/assets/img/fruitcake-thumb.jpg',
    '/assets/img/napoleonshat-thumb.jpg',
    '/assets/img/tea-loaf-thumb.jpg',
    '/assets/img/magdalena-thumb.jpg'
]

class GalleryProfile extends Component {
    constructor(props) {
        super(props);
        this.onThumbClick = this.onThumbClick.bind(this);
        this.state = {
            photoIndex: 0,
            openedGallery: 0,
            isOpen: false,
        };
    }

    onThumbClick(index, gallery) {
        this.setState({ photoIndex: index });
        this.setState({ isOpen: true });
        this.setState({ openedGallery: gallery });
    }

    getGallery() {
        if(this.state.openedGallery === 1) {
            return images1;
        } else  {
            return images2;
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <h5 className="mb-4">25 July 2019</h5>
                    </Colxx>
                </Row>
                <Row className="gallery gallery-page mb-5">
                    {
                        thumbs1.map((item, index) => {
                            return (
                                <Colxx xxs="6" lg="2" md="4" key={index}>
                                    <NavLink to="#" onClick={() => this.onThumbClick(index, 1)} location={{}}>
                                        <img className="img-fluid border-radius" src={item} alt="thumbnail" />
                                    </NavLink>
                                </Colxx>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Colxx xxs="12">
                        <h5 className="mb-4">14 April 2019</h5>
                    </Colxx>
                </Row>
                <Row className="gallery gallery-page mb-5">
                    {
                        thumbs2.map((item, index) => {
                            return (
                                <Colxx xxs="6" lg="3" md="3" key={index}>
                                    <NavLink to="#" onClick={() => this.onThumbClick(index, 2)} location={{}}>
                                        <img className="img-fluid border-radius" src={item} alt="thumbnail" />
                                    </NavLink>
                                </Colxx>
                            )
                        })
                    }
                </Row>

                {isOpen && (
                    <Lightbox
                        mainSrc={this.getGallery()[photoIndex]}
                        nextSrc={this.getGallery()[(photoIndex + 1) % this.getGallery().length]}
                        prevSrc={this.getGallery()[(photoIndex + this.getGallery().length - 1) % this.getGallery().length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + this.getGallery().length - 1) % this.getGallery().length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % this.getGallery().length,
                            })
                        }
                    />
                )}

            </Fragment>
        );
    }
}

export default injectIntl(GalleryProfile);