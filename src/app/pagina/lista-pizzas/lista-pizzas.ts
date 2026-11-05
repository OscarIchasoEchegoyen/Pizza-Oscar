
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PedidoItem } from '../../models/pedido-item';
import { CardPizza } from '../card-pizza/card-pizza';

@Component({
  selector: 'app-lista-pizzas',
  standalone: true,
  imports: [CardPizza],
  templateUrl: './lista-pizzas.html',
  styleUrl: './lista-pizzas.scss'
})
export class ListaPizzas {

  @Output() pizzaAgregada = new EventEmitter<PedidoItem>();

  listaCompleta: Pizza[] = [
    {
      id: 1,
      nombre: 'Margarita',
      ingredientes: 'Tomate, mozzarella y albahaca',
      precio: 8,
      imagen: 'assets/img/margarita.jpg'
    },
    {
      id: 2,
      nombre: 'Barbacoa',
      ingredientes: 'Salsa barbacoa, queso y carne',
      precio: 10,
      imagen: 'assets/img/bbq.jpg'
    },
    {
      id: 3,
      nombre: 'Cuatro Quesos',
      ingredientes: 'Mozzarella, gorgonzola, parmesano y emmental',
      precio: 11,
      imagen: 'assets/img/napolitana.jpg'
    },
    {
      id: 4,
      nombre: 'Pepperoni',
      ingredientes: 'Tomate, mozzarella y pepperoni',
      precio: 9,
      imagen: 'assets/img/peperoni.jpg'
    },
    {
      id: 5,
      nombre: 'Vegetal',
      ingredientes: 'Tomate, mozzarella, champiñones y pimiento',
      precio: 9,
      imagen: 'assets/img/vegetariana.jpg'
    },
    {
      id: 6,
      nombre: 'Hawaiana',
      ingredientes: 'Tomate, mozzarella, jamón y piña',
      precio: 10,
      imagen: 'assets/img/hawaiana.jpg'
    }
  ];

  listaFiltrada: Pizza[] = [...this.listaCompleta];

  @Input() set ingrediente(valor: string) {

    const busqueda = (valor || '').toLowerCase().trim();

    if (busqueda === '') {
      this.listaFiltrada = [...this.listaCompleta];
    } else {
      this.listaFiltrada = this.listaCompleta.filter(pizza =>
        pizza.ingredientes.toLowerCase().includes(busqueda)
      );
    }

  }

  agregarPizza(item: PedidoItem) {
    this.pizzaAgregada.emit(item);
  }

}
