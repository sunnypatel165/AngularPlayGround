import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CharToSpacePipe } from './shared/char-to-space.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductGaurdService } from './products/product-gaurd.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CharToSpacePipe,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component:ProductListComponent}, 
      {path: 'products/:id', 
        canActivate:  [ProductGaurdService], 
        component: ProductDetailComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'}, 
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [ProductGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
