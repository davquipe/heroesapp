import { HeroesService } from './../../services/heroes.service';
import { HeroeModel } from './../../models/heroe.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log("Formulario Invalido");
      return;
    }

    // metodo crear
    this.heroesService.crearHeroe( this.heroe )
      .subscribe( resp => {
        console.log(resp);

      })

  }

}
