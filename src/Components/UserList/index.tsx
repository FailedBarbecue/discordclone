import React from 'react';

import { Container, Role, User, Avatar } from './styles'

export interface UserProps {
    nickname: string;
    isBot?: boolean;
    online?: boolean;
    away?: boolean;
    occupied?: boolean;
    offline?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot,
    online
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} nickname={nickname}
                online={online}>

            </Avatar>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>ƓǪƊ - 1</Role>
            <UserRow nickname="Failed" online />

            <Role>ADMIN - 4</Role>
            <UserRow nickname="cabeçao" isBot online />
            <UserRow nickname="João Trolha" online />
            <UserRow nickname="Diogo" online />
            <UserRow nickname="Leviot" online />
            <UserRow nickname="grrrrrrrr" online />
            <Role>BOT'S - 3</Role>
            <UserRow nickname="dj djogo 2.0" isBot online />
            <UserRow nickname="fuck dj djogo" isBot online />
            <UserRow nickname="jóck musicas" isBot online />
            <Role>OFFLINE - 22</Role>
            <UserRow nickname="_𝔇𝔞𝔱𝔥𝔢𝔲𝔰" />
            <UserRow nickname="arthu" />
            <UserRow nickname="banatakd" />
            <UserRow nickname="CaioCaralho" />
            <UserRow nickname="Kodrix" />
            <UserRow nickname="felipera" />
            <UserRow nickname="carlao" />
            <UserRow nickname="Eduardo Gold" />
            <UserRow nickname="Daniels VRUM" />
            <UserRow nickname="Luizfneto21" />
            <UserRow nickname="Machado" />
            <UserRow nickname="MegaZordDoAcre" />
            <UserRow nickname="esdra" />
        </Container>
    );
}

export default UserList;