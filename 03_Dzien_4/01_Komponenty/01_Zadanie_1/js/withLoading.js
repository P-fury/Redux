import React from 'react';

export default (Component, borderColor) => {
    return (props) => (
        <div style={{ border: `1px solid ${borderColor}`}}>
            <img src="https://cdn.dribbble.com/users/172906/screenshots/1185018/media/d228d11a77664ee389e967919a1adfa9.gif"/>
            <Component {...props} />
        </div>
    )
}