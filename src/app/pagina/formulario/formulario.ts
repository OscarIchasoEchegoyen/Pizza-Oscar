
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss'
})
export class Formulario {

  @Output() pedidoRealizado = new EventEmitter<void>();

  hora: string = '';
  direccion: string = '';
  metodoPago: string = '';

  numeroTarjeta: string = '';
  movil: string = '';

  realizarPedido(form: NgForm) {

    // Marcar todos los campos como tocados
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Comprobar que se ha seleccionado un método de pago
    if (this.metodoPago === '') {
      return;
    }

    // Confirmar pedido
    this.pedidoRealizado.emit();

    // Limpiar los datos del formulario
    this.hora = '';
    this.direccion = '';
    this.metodoPago = '';
    this.numeroTarjeta = '';
    this.movil = '';

    form.resetForm();

  }

}
