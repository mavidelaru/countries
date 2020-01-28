import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/model/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

   visitados:string[]=[];
   estancia:Pais=undefined;
   jugable:boolean=true;

  constructor(private paisService:PaisService) { }
   
    //1. Comprobar que 
    //2. Si el país no es visitado, solicitar a la API para pintar el nuevo país con sus fronteras
    //3. Si ya ha salido visitado, GAME OVER

  ngOnInit(): void {

   this.paisService.getByCode("ESP").subscribe(data=>{

     this.visitados=["ESP"];
     this.estancia=data;

   })
  }

  viajar(codigoDestino:string){

    if(this.visitados.includes(codigoDestino)){
      this.jugable=false;
    }
    this.paisService.getByCode(codigoDestino).subscribe(data => {
      this.estancia=data;
      this.visitados.push(codigoDestino);

    })
  }

  reset(){
    this.paisService.getByCode("ESP").subscribe(data=>{

      this.visitados=["ESP"]
      this.jugable=true;
 
    })

  }


}
