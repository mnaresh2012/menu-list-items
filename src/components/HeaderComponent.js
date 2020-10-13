import React from 'react';

export default function HeaderComponent() {
    return (
        <div style={headerStyle}>
            <h1>* Restaurant Menu List *</h1>
        </div>
    )
}
const headerStyle = {
    background: '#000',
    color: "#fff",
    textAlign: "center",
    padding: "1px 0"
}