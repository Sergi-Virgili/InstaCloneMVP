import React from "react";

const style = (block: boolean) => ({
    backgroundColor: "#00D1B2",
    borderRadius: '4px',
    padding: "10px 15px",
    color: 'white',
    width: block ? '100%' : '100px',
    marginBottom: '10px'
}) as React.CSSProperties;

interface IButtonProps {
    block?: boolean
}

export default class Button extends React.Component<IButtonProps> {
    public render() {
        const { block = false } = this.props;
        return (
            <button {...this.props} style={style(block)} />
        );
    }
}
