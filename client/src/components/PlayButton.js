import React from "react";
import { Button } from "semantic-ui-react"

function PlayButton(props) {
    const { isPlaying, handleClick } = props;

    return (
        <Button
            color={isPlaying ? 'red' : 'blue'}
            onClick={handleClick}
        >
            Start/Stop Simulplay
        </Button>
    ); 
}

export default PlayButton;