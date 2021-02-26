import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieModule } from './pages/movie/movie.module';
// import { MovieComponent } from './pages/movie/movie.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MovieModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
