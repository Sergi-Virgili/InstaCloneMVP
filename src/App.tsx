import React from "react";
import Container from './components/Container';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Link from './components/Link';
import Center from './components/Center';

import "./App.css";

function App() {
    return (
        <Container>
            <Card>
                <Title>Login</Title>
                <Input placeholder={'email'} label={'email'} />
                <Input placeholder={'password'} label={'password'} />
                <Button block={true}>Send</Button>
                <Center>
                    <Link>or register</Link>
                </Center>
            </Card>
        </Container>
    );
}

export default App;
