import React from "react";

const style = {
    boxSizing: 'border-box',
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: '4px',
    padding: "10px 15px",
    margin: '10px 0',
    width: '100%'

} as React.CSSProperties;

const styleSpan = {
    color: '#777',
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 900
} as React.CSSProperties;

interface IInputProps {
    placeholder?: string,
    label: string
}

export default class Input extends React.Component<IInputProps> {
    public render() {
        const { label } = this.props;
        return (
            <div>
                <span style={styleSpan}>{label}</span>
                <input {...this.props} style={style} />
            </div>
        );
    }
}
