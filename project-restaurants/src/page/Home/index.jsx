import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import Slider from 'react-slick'

import TextField, {Input} from '@material/react-text-field';

import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './style';
import { Card, RestaurantCard, Modal, Map } from '../../componets/index';
import { Restaurant } from '../../componets/RestaurantCard/style';

const Home = () => {

    const [inputValue, setInputValue] = useState('');

    const [query, setQuery] = useState(null)

    const [modalOpened, setModalOpened] = useState(false);

    const { restaurants } = useSelector((state) => state.restaurants);

        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true
          };

          function handleKeyPress(e){
              if (e.key === 'Enter'){
                setQuery(inputValue);
              }
          }
    
    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />

                        <TextField
                            label='Pesquisar'
                            outlined
                            trailingIcon={<MaterialIcon role="button" icon="search"/>}
                        >
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)} 
                        />
                        </TextField>

                        <CarouselTitle> Na Sua Área </CarouselTitle>
                        <Slider>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => (
                                    <Card 
                                        Key={restaurant.place_id}
                                        photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante }
                                        title={restaurant.name}
                                    />
                                ))}
                            </Carousel>
                        </Slider>
                       {/* <button onClick={() => setModalOpened(true)}>Abrir Modal</button>*/ }
                </Search>
                {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} />)}
                
            </Container>

            <Map query={query} />
            <Modal open={modalOpened} onClose={() => setModalOpened (!modalOpened)} /> 
        </Wrapper>
    );
};

export default Home;