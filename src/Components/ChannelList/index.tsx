import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>˅ DEEZ</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="poggers" />
            <ChannelButton channelName="filme" />
            <ChannelButton channelName="song-requests" />
            <ChannelButton channelName="botmusiquinha" />
            <br></br>
            <Category>
                <span>˅ DINO</span>
                <AddCategoryIcon />
            </Category>
            <ChannelButton channelName="chatzinho" />
            <ChannelButton channelName="botmusiquinha" />
            <ChannelButton channelName="bate papin" />
            <ChannelButton channelName="f" />
        </Container>
    );
}

export default ChannelList;