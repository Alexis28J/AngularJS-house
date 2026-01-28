import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';

const routeConfig: Routes = [
  {
    path: '',    //path vuoto indica la rotta principale  //nel path scrivo il nome della rotta che voglio creare ed è meglio scriverlo in minuscolo
    component: Home, //il componente associato a questa rotta
    title: 'Home page',  //Non è necessario
  },
  {
    path: 'details/:id',   //:id indica un parametro dinamico nella rotta cioè l'id della casa
    component: Details,
    title: 'Home details',
  },
];

export default routeConfig;