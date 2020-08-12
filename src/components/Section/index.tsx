import React from 'react';

import { Container, HeaderWrapper, Header, DropBoxLogo, Content } from './styles'

interface Props {
    variant: 'blue' | 'beige' | 'white' | 'black'
    title: string
    description: string
}


const Section: React.FC<Props> = ({variant, title, description}) => {
    const buttonVariant = Math.round(Math.random());
    
    return (
        <Container className={variant}>
            <HeaderWrapper>
                <Header>
                    <h1>
                        <DropBoxLogo />
                        <span>Dropbox</span>
                    </h1>
                    <button>{buttonVariant === 0 ? 'Interagir' : 'Acessar'}</button>
                </Header>
            </HeaderWrapper>
            <Content>
                <h2>{title}</h2>
                <p>{description}</p>
            </Content>
        </Container>
    );
}

export default Section;
