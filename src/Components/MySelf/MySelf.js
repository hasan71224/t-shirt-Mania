import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornament}) => {
    return (
        <div>
            <h2>This is myself</h2>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;