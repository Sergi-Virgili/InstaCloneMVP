import React from 'react';
import ProfileImage from '../../components/ProfileImage'
import Button from '../../components/Button'
import Card from '../../components/Card'


const style = {
    row: {
        padding: '15px',
        display: 'flex',

        justifyContent: 'space-between'
    } as React.CSSProperties,
    container: {
        padding: '15px'
    }
}

export default class Pofile extends React.Component {
    public render() {
        return (
            <div style={style.container}>
                <div style={style.row}>
                    <ProfileImage />
                    <Button block={false}>Add</Button>
                </div >
                <div style={style.row}>
                    <Card><img src="http://placekitten.com/200/200" alt="" /></Card>
                    <Card><img src="http://placekitten.com/200/200" alt="" /></Card>
                    <Card><img src="http://placekitten.com/200/200" alt="" /></Card>
                    <Card><img src="http://placekitten.com/200/200" alt="" /></Card>
                </div>
            </div>
        );
    }
}