import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";

import { AgmCoreModule } from "@agm/core";
import { MapaComponent } from './componentes/mapa/mapa.component';
import { MapaEditarComponent } from './componentes/mapa/mapa-editar/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyA1OFPtxIiBE_6LXkk_R4GEUUx1uqF4y24" }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
