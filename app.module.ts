import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './src/app/app.component'; 
import { SidebarComponent } from './src/app/modules/main/components/sidebar/sidebar.component';// Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
    // otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // otros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
