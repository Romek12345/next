import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
 // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FooterComponent },
  // path** dziala tylko, i nie wczytuje reszty komponentow(body,headera)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

