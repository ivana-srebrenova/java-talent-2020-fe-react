import React from 'react';
import PropTypes from 'prop-types';
// import the css styles using: `import './03-styling.css'`
// this will use webpack to load the css styles into your app.
import './03-styling.css';

function Box(props) {
    return (

        // render a div with the props:
        // - className that is assigned to `Box Box--${props.size}`
        // - style that is assigned to props.style
        // inside the div, forward along props.children

         <div className={`Box Box--${props.size}`} style={props.style}>
              {props.children}
       </div>
    );
}

// I'm gonna give this one to you. Isn't that nice? :)
Box.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

export const Example = () => (
    <div>
    <Box className='Box--small' size='small' style={{color:"red"}} style={{backgroundColor: "lightgreen"}}>
          Small one
          </Box>
        <Box className='Box' size='medium' style={{backgroundColor: "lightblue"}}>
          Medium one
          </Box>
        <Box className='Box--large' size='large' style={{backgroundColor: "lightgrey"}}>
          Large one
          </Box>



    </div>
);