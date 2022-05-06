## Programação Reativa com Rxjs e Angular

Esse repositório tem como objetivo passar diversos conceitos da programação reativa com o [RxJs](https://rxjs.dev/), através de exemplos práticos com Angular.

# Pré Requisitos para instalação

Utilizar node v16 ou superior

# Instalação do Angular CLI

Com o comando abaixo a instalação do angular CLI é realizada de forma global na máquina

    npm install -g @angular/cli

# Clone do repositório

Para clonar a branch principal(master) copie e cole o seguinte comando:

    git clone https://github.com/lucasspeixoto/reactive-angular.git

Para instalação

    cd reactive-angular
    npm install ou yarn install

# Inicialização so servidor backend

A api 'fake' para uso nos exemplos foi construida com json-server e nodemon. que pode ser 
configurada seguindo este tutorial: [Configuração Backend](https://javascript.plainenglish.io/setting-up-a-mock-backend-with-angular-13-applications-26a21788f7da)

    npm run mock:server

# Iniciar o projeto localmente

Para iniciar o projeto angular localmente execute o seguinte comando no terminal:

    npm start ou yarn start

A aplicação é visivel ao acessar localmente a porta 4200: [http://localhost:4200](http://localhost:4200)

# Material de apoio

Os exemplos utilizam um material de apoio, que pode ser acessado neste link: [Material de Apoio](https://lspeixoto.notion.site/Reactive-Angular-06dbe331311146dbb09e7d0bab595898)

# Importante

Este repositório possue diversar branches, cada branch possue implementações de um tema específico.

# Relação temas x Branchs

| Tema              | Nome da Branch |
| ----------------- | -------------- |
| Projeto em branco | master         |
| Stream de Dados   | streams        |
| Observables       | observables    |
