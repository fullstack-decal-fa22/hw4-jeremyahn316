import React, { useState } from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    const [feed, setFeed] = useState([])

    const handleClick = (color) => {
        setFeed([color, ...feed])
    }

    /* Use the map() function to render multiple Blocks! */
    const posts = feed.map((color) => <Block color={color}/>);

    return (
        <div>
            <Menu handleClick={handleClick}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;