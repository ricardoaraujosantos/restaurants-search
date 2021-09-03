import React, { useState } from 'react'

import { Container, Search } from './style';

import TextField, {Input} from '@material/react-text-field';

import Logo from '../../assets/logo.svg'


const Home = () => {

    const [inputValue, setInputValue] = useState('cachorro');

    return(
            <Container>
                <Search>
                    <img src={Logo} alt="Logo do restaurante"/>
                        <TextField
                            label='Pesquisar'
                            // onTrailingIconSelect={() => this.setState({value: ''})}
                            // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
                        >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                        </TextField>
                </Search>
            </Container>

    );
};

export default Home;