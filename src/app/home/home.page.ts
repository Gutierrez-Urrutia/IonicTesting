import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private readonly service: ApiService){
    const aves = localStorage.getItem('aves');
    if(aves){
      this.aves = JSON.parse(aves);
      console.log('Aves desde el localStorage');
    } else {
        this.service.obtenerAves().subscribe((data: any) => {
          localStorage.setItem('aves', JSON.stringify(data));
          this.aves = data;
          console.log('Aves desde la API');
      });
    };
  }
  private resultado: number = 0;
  titulo: string = 'Pruebas unitarias';
  aves: any[] = [];
  ngOnInit(): void {
    this.resultado = this.sumar(1, 2);
    console.log(this.resultado);
  }
  
  
  sumar(numeroUno: number, numeroDos: number): number {
    if (numeroUno < 0 || numeroDos < 0) {
      throw new Error('No se permiten números negativos');
    }
    return numeroUno + numeroDos;
  }

  restar(numeroUno: number, numeroDos: number): number {
    return numeroUno - numeroDos;
  }

  dividir(numeroUno: number, numeroDos: number): number {
    if (numeroDos == 0) {
      throw new Error('No se puede dividir por cero'); 
    }
    return numeroUno / numeroDos;
  }

  multiplicar(numeroUno: number, numeroDos: number): number {
    return numeroUno * numeroDos;
  }


}
