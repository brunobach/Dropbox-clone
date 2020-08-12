import React from 'react';


import landing from '../../assets/landing.jpg'

import { Container, HeaderWrapper, Header, HeaderLink, DropBoxLogo, Content, ContentBody } from './styles'

interface Props {
    variant: 'blue' | 'beige' | 'white' | 'black'
    title: string
    description: string
}


const Section: React.FC<Props> = ({variant, title, description}) => {
    const buttonVariant = Math.round(Math.random());
    
    function handleScroll() {
        window.scrollTo(0, 310)
    }

    function handleToggle() {
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return (
        <Container className={variant}>
            <HeaderWrapper>
                <Header>
                    <h1>
                        <DropBoxLogo />
                        <span>Dropbox</span>
                    </h1>
                    <HeaderLink>
                        <a href='/'>Para equipes</a>
                        <a href='/'>Para pessoas físicas</a>
                    </HeaderLink>
                    <button onClick={handleToggle}>{buttonVariant === 0 ? 'Interagir' : 'Acessar'}</button>
                </Header>
            </HeaderWrapper>
            <Content>
                <button onClick={handleScroll}> 
                    <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.456 34.144c2.112-3.696 7.008-8.064 10.992-9.552v-3.408c-4.128 1.632-8.256 5.328-10.272 8.16V.016h-2.88v29.328C8.328 26.512 4.248 22.816.12 21.232v3.36c3.984 1.44 8.784 5.856 10.896 9.552h1.44z" fill="#FFE7AA"></path></svg>
                </button>
                <img src={landing} alt="Teste" />
                
                <ContentBody>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </ContentBody>
                
               
            </Content>
        </Container>
    );
}

export default Section;
