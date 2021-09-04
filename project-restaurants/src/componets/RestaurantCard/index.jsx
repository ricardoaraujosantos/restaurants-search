import React from "react";
import ReactStars from "react-rating-stars-component";
import { Address, Restaurant, RestaurantInfo, Title } from "./style";

const RestaurantCard = () => ( 
            <Restaurant>
                <RestaurantInfo>
                    <Title>Info restaurante</Title>
                    <ReactStars count={5}
                                 activeColor='#e7711c'
                                 isHalf
                                 edit={false}
                                 value={4}
                    >
                    </ReactStars>
                    <Address>Endereço</Address>
                </RestaurantInfo>
            </Restaurant>
    );

export default RestaurantCard;