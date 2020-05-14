import React from 'react';


const style = {
    image: {
        borderRadius: '50%'
    },
}

export default class Pofile extends React.Component {
    public render() {
        return (
            <div>
                <img src='http://placekitten.com/100/100' style={style.image} alt='profile' />

            </div>
        );
    }
}