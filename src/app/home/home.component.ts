import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {DecimalPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {CardComponent} from '../shared/card/card.component';

@Component({

  selector: 'app-home',
  imports: [
    MatIcon,
    MatIconButton,
    NgForOf,
    DecimalPipe,
    NgIf,
    NgClass,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    { titulo: 'Total ventas', semana: 'Semana', cantidad: 2441216.27, esMonetario: true },
    { titulo: 'Ticket promedio', semana: 'Semana', cantidad: 1216.17, esMonetario: true },
    { titulo: 'Unidades vendidas', semana: 'Semana', cantidad: 355, esMonetario: false },
    { titulo: 'Compras Totales', semana: 'Semana', cantidad: 1085760.50, esMonetario: true }
  ];

  card_venta = [
    {icon_name: 'point_of_sale', tittle:'Nueva venta', description:'Crea una nueva venta'},
    {icon_name: 'shopping_basket  ', tittle:'Nueva compra', description:'Crea una compra a un proveedor'},
    {icon_name: 'package_2', tittle:'Crear producto', description:'Crea un producto rápido'},
    {icon_name: 'contract_edit', tittle:'Nueva factura', description:'Crea un producto rápido'},
    {icon_name: 'add_card ', tittle:'Crea un gasto', description:'Agrega los gastos operativos de tu negocio.'},
    {icon_name: 'request_page', tittle:'Corte de caja', description:'Realiza el corte de caja'},
    {icon_name: 'data_check', tittle:'Requisiciones', description:'Registra y administra tus requisiciones'},
    {icon_name: 'data_info_alert', tittle:'Requisiciones pendientes', description:'Registra y administra tus requisiciones'},
    {icon_name: 'person', tittle:'Clientes', description:'Registra y administra tus clientes'},
    {icon_name: 'deployed_code_account', tittle:'Proveedores', description:'Registra y administra tus proveedores'},
    {icon_name: 'person_apron', tittle:'Empleados', description:'Registra y administra tus empleados'},
    {icon_name: 'add_task', tittle:'Procesos', description:'Flujos de trabajo'},
  ]
}
