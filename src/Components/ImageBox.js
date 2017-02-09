import React from 'react';
import {Image, Col} from 'react-bootstrap';
import {MdStar,MdStarHalf,MdFavorite} from 'react-icons/lib/md'

const ImageBox = (props) => {
    var {image, price, title, ...other} = props;
    return (
        <Col {...other}>
            <div className="shop-item">
                <div className="item-thumbnail item-image">
                    <span className="item-rating text-warning" >
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStarHalf/>
                    </span>
                    <Image src={image}/>
                    <div className="item-shop-tools">
                        <a className="add-to-wishlist">
                            <MdFavorite/>
                        </a>
                        <a className="add-to-cart">ADD TO CART</a>
                    </div>
                </div>
                <div className="item-price">
                    <h5>{title}</h5>
                    <span>{price}$</span>
                </div>
            </div>
        </Col>
    );
};
export default ImageBox;