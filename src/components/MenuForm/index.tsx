import React from 'react';

import { Container, Navigation, DropBoxLogo, Form } from './styles';


const MenuForm: React.FC = () => {
    function handleToggle() {
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }

  return (
  <Container>
      <Navigation>
          <h1>
              <DropBoxLogo/>
              <span>Dropbox</span>
          </h1>
          <button onClick={handleToggle} className='action--close'>✕</button>
      </Navigation>
      <Form>
          <span className="title">Registre-se</span>
          <span className="subtitle">Preencha o formulario abaixo</span>

          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button>Prosseguir</button>
          <span className="terms">
          Está página é de propósito estudantil, nenhum elemento nela contida deriva-se para usuários finais. Nenhuma informação aqui inserida será guardada ou repassada para terceiros. 
          </span>
      </Form>
  </Container>
)
}

export default MenuForm;