import React from "react";

const style = {
    boxSizing: 'border-box',
    backgroundColor: "#eee",
    padding: "10px 15px",
    height: 'calc(100vh)',
    width: 'calc(100vw)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
} as React.CSSProperties;

export default class Contrainer extends React.Component {
    public render() {
        const { children } = this.props;
        return (
            <div style={style}>
                {children}
            </div>
        );
    }
}
