import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() ingredienteSeleccionado = new EventEmitter<string>();
  @Output() paginaSeleccionada = new EventEmitter<string>();

  @Input() mostrarBuscador: boolean = true;

  filtrarIngredientes(event: Event) {
    const input = event.target as HTMLInputElement;
    this.ingredienteSeleccionado.emit(input.value);
  }

  cambiarPagina(pagina: string) {
    this.paginaSeleccionada.emit(pagina);
  }
}