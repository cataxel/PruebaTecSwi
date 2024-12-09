import { Component, Input } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [
    MatIcon
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() icono_name: string; // Nombre del icono de Angular Material
  @Input() title: string; // Título de la card
  @Input() description: string; // Descripción
}
