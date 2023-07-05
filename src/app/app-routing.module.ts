import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';
import { CountriesInfoComponent } from './pages/countries-info/countries-info.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path:'CountriesInfo', component: CountriesInfoComponent},
  {path: 'about', component: SobreComponent},
  {path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
