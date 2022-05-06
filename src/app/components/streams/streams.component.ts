import { Component, OnInit } from '@angular/core';

//? ----------------------------- Stream de Dados ----------------------------- ?//
/**
 * O que são streams de dados ?
 * Uma stream de dados é uma sequencia de eventos ordenados
 * ao longo do tempo que pode transmitir um valor, um erro ou um
 * sinal de concluído/completed. A conclusão geralmente ocorre, por exemplo,
 * quando a janela ou visualização atual que contém esse botão é fechada.
 *
 * Os eventos emitidos são capturados apenas de forma assíncrona, definindo
 * uma função que será executada quando um valor for emitido, outra função
 * quando um erro for emitido e uma terceira função quando for completada.
 * Quem fica 'escutando' a transmissão é chamado de subscriber, as funções
 * que definimos são observables.
 *
 *
 */

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss'],
})
export class StreamsComponent implements OnInit {
  eventListener: MouseEvent;

  intervalCounter: number = 0;
  timeoutValue: string;

  constructor() {}

  ngOnInit() {
    this.mouseEvent();
    this.setInterval();
    this.setTimeout();
  }

  mouseEvent() {
    //* Exemplo 1 - EventListener: Emissão de valores a cada click do mouse (multi-value)
    document.addEventListener('click', (event) => {
      this.eventListener = event;
      console.log(this.eventListener);
      /**
       * Aqui é emitido um evento a cada click do mouse na tela
       */
    });
  }

  setInterval() {
    //* Exemplo 2 - Interval: Emite valores a cada 1s (multi-value)
    setInterval(() => {
      this.intervalCounter++;
    }, 1000);
  }

  setTimeout() {
    //* Timeout - Emite um único valor depois de 2s (single-value)
    this.timeoutValue = 'Inicio da setTimeout';
    setTimeout(() => {
      this.timeoutValue = 'Fim da setTimeout';
    }, 2000);
  }
}
