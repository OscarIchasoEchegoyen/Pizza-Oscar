
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PedidoItem } from '../../models/pedido-item';

@Component({
  selector: 'app-card-pizza',
  standalone: true,
  imports: [],
  templateUrl: './card-pizza.html',
  styleUrl: './card-pizza.scss'
})
export class CardPizza {

  @Input() pizza!: Pizza;

  @Output() pizzaAgregada = new EventEmitter<PedidoItem>();

  cantidad: number = 1;

  cambiarCantidad(event: Event) {
    const input = event.target as HTMLInputElement;

    this.cantidad = Math.max(1, Number(input.value) || 1);
  }

  agregarAlPedido() {

    const item: PedidoItem = {
      pizza: this.pizza,
      cantidad: this.cantidad
    };

    this.pizzaAgregada.emit(item);

  }

}
