import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  // public nombre: string ='Superman';
  // public edad: number = 36;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeAge( value:number ) {
    // TODO:
    this.age = value;
  }

  changeHero( value: string = "Superman" ){
    this.name = value;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
