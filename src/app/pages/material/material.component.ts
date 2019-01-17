import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {  startWith, map  } from 'rxjs/operators';


export interface Opciones  {
   name: String;
   img: String;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styles: []
})
export class MaterialComponent implements OnInit {

  nameCrtl = new FormControl();
  namePlace: String = 'Selecciona tu personaje...';
  filterd: Observable<Opciones[]>;

  options: Opciones[] = [
    {name: 'Terry Bogard',
     img: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/1/1a/Terry.png/revision/latest?cb=20161015200638'  
  }, 
    {name: 'Rock Howard',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYp7NecbS39ibl48TYOqzS_-a2io5tbT-Hi8TptrqxppO0KRSS'  
  }, 
    {name: 'Geese Howard',
    img: 'https://vignette.wikia.nocookie.net/oneminutemelee/images/c/c2/Geese.png/revision/latest?cb=20170125205132'
  }];

  constructor() {
    this.filterd = this.nameCrtl.valueChanges
      .pipe(startWith(''), map(state => state ? this._filterStates(state) : this.options.slice())
      );
  }

  ngOnInit() {
  }

  private _filterStates(value: string): Opciones[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  onSubmit(event) {
    console.log(this.nameCrtl.value);
  }

}


