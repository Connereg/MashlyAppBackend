import React, {useState} from 'react';
import { Segment, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { ReactPlayer } from 'react-player'

const AudioRevealDiv = styled.div`
visibility: hidden;
max-width: 1px;
`

const PlayerComponent = (props) => {
    const { simulPlay, supplyLink1, supplyLink2, showAudioSource } = props;

    return ( 
        <Segment attached>
            <div class="video-container">
                <ReactPlayer playing={simulPlay} muted={true} controls url={supplyLink1} />
            </div>
            {showAudioSource === true ? 
                <div class="video-container">
                    <ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
                </div>
                : 
                <AudioRevealDiv>
                     <ReactPlayer playing={simulPlay}  controls url={supplyLink2} />
                </AudioRevealDiv>}  
        </Segment>
    )
}

export default PlayerComponent;


