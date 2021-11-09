import React from 'react';
import { Segment } from 'semantic-ui-react'
import { ReactPlayer } from 'react-player'

const PlayerComponent = (props) => {
    const { simulPlay, supplyLink1, supplyLink2 } = props;

    return (
        <Segment attached>
            <div class="video-container">
                <ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
            </div>
            <div class="video-container">
                <ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
            </div>
        </Segment>
    )
}

export default PlayerComponent;


