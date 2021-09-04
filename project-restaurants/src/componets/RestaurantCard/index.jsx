import React from "react";
import ReactStars from "react-rating-stars-component";
import { Address, Restaurant, RestaurantInfo, RestaurantePhoto, Title } from "./style";

import restaurant from '../../assets/restaurante-fake.png'

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
                    <Address>Endereço rua travessa av</Address>
                </RestaurantInfo>
                <RestaurantePhoto src={restaurant} alt="foto do restaurante" />
            </Restaurant>
    );

export default RestaurantCard;