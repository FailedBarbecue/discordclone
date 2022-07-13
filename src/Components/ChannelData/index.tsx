import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'


import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="cabeçao"
                    date="10/7/2022"
                    content={
                        <>
                            Hoje fui carregado pelo <Mention>@Failed</Mention>
                        </>
                    }
                    hasMention
                    isBot
                />
                <ChannelMessage
                    author="Leviot"
                    date="13/07/2022"
                    content="Vamo feedar muito"
                />
                <ChannelMessage
                    author="grrrrrrrr"
                    date="13/07/2022"
                    content="Singed jungle"
                />
                <ChannelMessage
                    author="Diogo"
                    date="13/07/2022"
                    content="Feedei de vayne"
                />
                <ChannelMessage
                    author="João trolha"
                    date="13/07/2022"
                    content="Voli do Trolly"
                />

                <ChannelMessage
                    author="Failed"
                    date="13/07/2022"
                    content="Vou combar muito"
                />
                <ChannelMessage
                    author="João trolha"
                    date="13/07/2022"
                    content="Voli do Trolly"
                />
                <ChannelMessage
                    author="Failed"
                    date="13/07/2022"
                    content="aa eqf aa eqr"
                />
                <ChannelMessage
                    author="cabeçao"
                    date="10/7/2022"
                    content={
                        <>
                            <Mention>@Failed</Mention> me carregou melhor yasuo do mundo
                        </>
                    }
                    hasMention
                    isBot
                />
                <ChannelMessage
                    author="Failed"
                    date="13/07/2022"
                    content="sheesh"
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #poggers" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;