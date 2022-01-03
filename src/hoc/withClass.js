import React from 'react';

// //example of HOC using functional component () jsx vayira yesto use garyeko 
// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );

// export default withClass;


//using regualer arrow function 

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};


export default withClass;

