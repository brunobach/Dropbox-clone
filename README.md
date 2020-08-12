<h1 align="center">UI Clone - Dropbox.com</h1>
 
> Este projeto é de propósito estudantil, nenhum elemento nele contido deriva-se para usuários finais. Nenhuma informação aqui inserida será guardada ou repassada para terceiros.

<p align="center">	
<a href="https://www.linkedin.com/in/bruno-bach/">
  <img title="Linkedin Bruno Bach"  alt="Linkedin Bruno Bach" src="https://img.shields.io/badge/-brunobach-8257E5?style=flat&logo=Linkedin&logoColor=white" />
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunobach/Dropbox-clone?color=774DD6">

  <a aria-label="Completed" title="GitHub: Guilherme Rodz" alt="GitHub Guilherme Rodz" href="https://github.com/guilhermerodz">
    <img src="https://img.shields.io/badge/Guilherme Rodz-8257E5?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  <a href="https://github.com/brunobach/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunobach/Dropbox-clone?color=774DD6">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
   <a href="https://github.com/brunobach/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/brunobach/Dropbox-clone?color=8257E5&logo=github">
  </a>
</p>
<p align="center">

<p align="center">
  <a href="#-Descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## ✍ Descrição: Como funciona o projeto??

> UI Clone do site dropbox.com disponibilizado pelo [Guilherme Rodz](https://github.com/guilhermerodz) no canal da [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg).

Criação de um UI Clone em ReactJS do site dropbox.com, neste projeto foram utilizados conceitos responsivos de desenvolvimento. Tais como mobile first, entre técnicas em CSS como Clip, animation, transform entre outras.

<h1 align="center">
    <img alt="NextLevelWeek_Proffy" title="#NextLevelWeek" src=".github/dropbox.gif"/>
</h1>


<p align="center">

<a href="https://dropbox-clone-ui.netlify.app/">
    <img alt="Open Demo Netlify" title="Open Demo Netlify" src="https://www.maistecnologia.com/wp-content/uploads/2015/06/dropbox.jpg" width="50">
</a>
<a href="https://github.com/brunobach/proffy/commits/master">
    <img alt="GitHub last commit" src="https://api.netlify.com/api/v1/badges/81cfb1a2-693f-46b5-8319-2b8b4a27e683/deploy-status">
</a>

</p>

## 💻 Projeto : Estrutura

```bash
📂 -- ui-dropbox-clone
    |-- .gitignore
    |-- tsconfig.json
    |-- package.json
    ┗-- README.md
    📂 -- public
     |  |-- favico.ico
     |  |-- index.html
     |  |-- manifest.json
     |  ┗-- robots.txt
    📂 -- src
        |-- 📂 assets
        |  ┗-- landing.jpg
        |-- 📂 components
        |  |-- 📂 MenuForm
        |  |  |-- index.tsx
        |  |  ┗-- styles.ts
        |  |-- 📂 Section
        |  |  |-- index.tsx
        |  |  ┗-- styles.ts
        |  |-- 📂 SideMenu
        |  |  |-- index.tsx
        |  |  ┗-- styles.ts
        |-- 📂 data
        |  |  ┗-- index.ts
        |-- 📂 styles
        |     ┗-- GlobalStyles.ts
        |
        |-- index.tsx
        ┗-- App.tsx
```

## 🛸 Tecnologias

This project was developed with the following technologies:

| Check | Descriçao | Tecnologias |
|:---:|---------|:-----------:|
| [x]  |DropBox Clone| ![npm](https://img.shields.io/npm/v/react?color=green&label=React&logo=react)  ![npm](https://img.shields.io/npm/v/typescript?color=blue&label=Typescript&logo=typescript&logoColor=blue) ![npm](https://img.shields.io/npm/v/styled-components?color=purple&label=styled-components&logo=styled-components&logoColor=purple)  |



## 🧰 Como usar

To clone and run this project, you'll need [Git](https://git-scm.com).

From your command line:

### 📥 Como baixar via cmd/terminal 

```bash
# Clone this repository
$ git clone https://github.com/brunobach/Dropbox-clone/

# Go into the repository
$ cd Dropbox-clone/src/public/

# Install dependencies
$ yarn or npm install

```

### 📲 Ou escaneie o codigo no seu dispositivo
<h1 align="center">
  <img alt="QRcode Git" title="QRcode Git" src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://github.com/brunobach/Dropbox-clone/" width="150px" />
</h1>


## 🤔 Como contribuir

-  Make a fork;
-  Create a branch with your feature: `git checkout -b my-feature`;
-  Commit changes: `git commit -m 'feat: My new feature'`;
-  Make a push to your branch: `git push origin my-feature`.

_After merging your receipt request to done, you can delete a branch from yours_

## 📝 License

This project is under the MIT license. See the [LICENSE](https://github.com/brunobach/Dropbox-clone/blob/master/LICENSE) for details.

Made with by Bruno Bach :wave: [Get in touch!](https://www.linkedin.com/in/bruno-bach/)
