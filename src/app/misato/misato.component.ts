import { Component, OnInit } from '@angular/core';
import { KatsuragiService } from '../services/katsuragi.service';

@Component({
  selector: 'app-misato',
  templateUrl: './misato.component.html',
  styleUrls: ['./misato.component.css']
})
export class MisatoComponent implements OnInit {
  private quote: string='';
  private author: string='';
  private banderaMensajes: boolean;
  private banderaBoton: boolean;
  private banderaImagen: boolean;


  constructor(private mensajesService: KatsuragiService) {
    this.banderaMensajes=true;
    this.banderaBoton=true;
    this.banderaImagen=false;
   }

  ngOnInit() {
    this.getQuotes();
  }
  getQuotes(){
    return this.mensajesService.getMensaje().subscribe(data => {
      this.quote = data.quote;
      this.author = data.author;
      return data;
    });
  }

  ocultarMensaje(){
      this.banderaMensajes = !this.banderaMensajes;
  }
  ocultarBoton(){
    this.banderaBoton = !this.banderaBoton;
  }
  mostrarImagen(){
    this.banderaImagen = !this.banderaImagen;
  }
}
