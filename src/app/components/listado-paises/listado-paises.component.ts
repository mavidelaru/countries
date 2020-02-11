import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/model/pais';



@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent {

  paises:Pais[] = [];
  selectedRegion:string = "select";
  regiones:any[]= [
    {
      nombre:"Europa",
      valor:"europe"
    },
    {
      nombre:"Asia",
      valor:"asia"
    },
    {
      nombre:"Africa",
      valor:"africa"
    },
    {
      nombre:"America",
      valor:"americas"
    },
    {
      nombre:"Oceania",
      valor:"oceania"
    }
  ];

  constructor(private paisService:PaisService) { }

  getPaises(){

    this.paisService.getRegion(this.selectedRegion).subscribe(data => {
      this.paises = data;
      console.log(this.paises);
    });

  }

}
