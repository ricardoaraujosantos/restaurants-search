import React from "react";
import ReactStars from "react-rating-stars-component";
import { Address, Restaurant, RestaurantInfo, RestaurantePhoto, Title } from "./style";

import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = ({ restaurant }) => ( 
            <Restaurant>
                <RestaurantInfo>
                    <Title>{ restaurant.name }</Title>
                        <ReactStars 
                            count={5}
                            activeColor='#e7711c'
                            isHalf
                            edit={false}
                            value={restaurant.rating}
                        >
                        </ReactStars>
                    <Address>{ restaurant.vicinity || restaurant.formatted_address }</Address>
                </RestaurantInfo>
            <RestaurantePhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="foto do restaurante" />
            </Restaurant>
    );

export default RestaurantCard;