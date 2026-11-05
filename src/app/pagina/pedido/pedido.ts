
import { Component, Input } from '@angular/core';
import { PedidoItem } from '../../models/pedido-item';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [],
  templateUrl: './pedido.html',
  styleUrl: './pedido.scss'
})
export class Pedido {

  @Input() pedido: PedidoItem[] = [];

  calcularTotal(): number {

    return this.pedido.reduce((total, item) => {
      return total + (item.pizza.precio * item.cantidad);
    }, 0);

  }

}
