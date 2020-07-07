import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarsComponent } from './stars/stars.component';
import { SecondsToHourPipe } from './pipes/secondsToHour.pipe';
import { NamesPipe } from './pipes/names.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgImageSliderModule } from 'ng-image-slider';
import {
  MatListModule,
  MatCardModule
} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MovieDetailComponent,
    NotFoundComponent,
    MovieItemComponent,
    StarsComponent,
    SecondsToHourPipe,
    NamesPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgImageSliderModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movies/:movieId', component: MovieDetailComponent },
      { path: '404', component: NotFoundComponent},
      { path: '**', redirectTo: '/404'}
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
