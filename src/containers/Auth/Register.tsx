import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Center from '../../components/Center';

export default class Register extends React.Component {
    public render() {
        return (
            <Container>
                <Card>
                    <Title>Register</Title>
                    <Input placeholder={'email'} label={'email'} />
                    <Input placeholder={'password'} label={'password'} />
                    <Button block={true}>Send</Button>
                    <Center>
                        <Link to='/'>or Login</Link>
                    </Center>
                </Card>
            </Container>
        );
    }
}