import React from "react";

const style = (center: boolean) => ({
    boxSizing: 'border-box',
    backgroundColor: "#eee",
    padding: "10px 15px",
    height: 'calc(100vh)',
    width: 'calc(100vw)',
    display: 'flex',
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
}) as React.CSSProperties;

interface IContainerProps {
    center?: boolean
}

export default class Contrainer extends React.Component<IContainerProps> {
    public render() {
        const { children, center = false } = this.props;
        return (
            <div style={style(center)}>
                {children}
            </div>
        );
    }
}
