import React from "react";

const style = {
    color: "blue",
    fontSize: '10px',
    paddingLeft: '20px'

};

export default class Link extends React.Component {
    public render() {

        return (
            <a {...this.props} style={style} />
        );
    }
}
