import { Component } from '@angular/core';

import { Header } from './pagina/header/header';
import { Navbar } from './pagina/navbar/navbar';
import { ListaPizzas } from './pagina/lista-pizzas/lista-pizzas';
import { Formulario } from './pagina/formulario/formulario';
import { Footer } from './pagina/footer/footer';
import { Pedido } from './pagina/pedido/pedido';

import { PedidoItem } from './models/pedido-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Navbar,
    ListaPizzas,
    Formulario,
    Footer,
    Pedido
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  paginaActual: string = 'listado';

  ingredienteBuscado: string = '';

  pedido: PedidoItem[] = [];

  mensajeGracias: string = '';

  recibirIngrediente(ingrediente: string) {
    this.ingredienteBuscado = ingrediente;
  }

  cambiarPagina(pagina: string) {
    this.paginaActual = pagina;
  }

  agregarAlPedido(item: PedidoItem) {

    const existente = this.pedido.find(
      p => p.pizza.id === item.pizza.id
    );

    if (existente) {

      this.pedido = this.pedido.map(p => {
        if (p.pizza.id === item.pizza.id) {
          return {
            ...p,
            cantidad: p.cantidad + item.cantidad
          };
        }

        return p;
      });

    } else {
      this.pedido = [...this.pedido, item];
    }

    this.mensajeGracias = '';
  }

  finalizarPedido() {

    this.pedido = [];

    this.mensajeGracias =
      '¡Gracias por realizar tu pedido en 4vPizza!';

    this.paginaActual = 'listado';
  }
}