import React, { useState } from 'react'

import Slider from 'react-slick'

import TextField, {Input} from '@material/react-text-field';

import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from './style';
import { Card } from '../../componets';

const Home = () => {

    const [inputValue, setInputValue] = useState('');

        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true
          };
    

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
                            onChange={(e) => setInputValue(e.target.value)} 
                        />
                        </TextField>
                        <CarouselTitle>
                            Na Sua Área
                        </CarouselTitle>
                        <Slider {...settings}>
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                            <Card photo={restaurant} />
                        </Slider>
                </Search>
            </Container>
            <Map />
        </Wrapper>
    );
};

export default Home;