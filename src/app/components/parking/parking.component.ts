import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bahia } from 'src/app/models/bahia';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  parking: FormGroup;
  loading = false;
  estado = "Disponible";

  constructor(private fb: FormBuilder, private router: Router) {
    this.parking = this.fb.group({
      bahia: ['', Validators.required],
      placa: ['', Validators.required],
      tarifa: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      horaEntrada: ['', Validators.required],
    });
  }

  bahias:Bahia[]=[
    {idBahia: 1, idParqueadero: 1, estado: 'Ocupado', tipoBahia: 'Moto'},
    {idBahia: 2, idParqueadero: 1, estado: 'Disponible', tipoBahia: 'Carro'},
    {idBahia: 3, idParqueadero: 1, estado: 'Ocupado', tipoBahia: 'Moto'},
    {idBahia: 4, idParqueadero: 1, estado: 'Disponible', tipoBahia: 'Moto'},
    {idBahia: 5, idParqueadero: 1, estado: 'Ocupado', tipoBahia: 'Moto'},
    {idBahia: 6, idParqueadero: 1, estado: 'Disponible', tipoBahia: 'Carro'},
    {idBahia: 7, idParqueadero: 1, estado: 'Disponible', tipoBahia: 'Carro'},
    {idBahia: 8, idParqueadero: 1, estado: 'Ocupado', tipoBahia: 'Moto'},
    {idBahia: 9, idParqueadero: 1, estado: 'Disponible', tipoBahia: 'Moto'},
  ];

  ngOnInit(): void {
  }

  registrarParqueo(): void {

  }

  limpiar() {
    this.parking.reset();
  }

}
