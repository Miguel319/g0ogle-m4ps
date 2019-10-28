import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { MapaComponent } from "./componenetes/mapa/mapa.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent, MapaComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyA1OFPtxIiBE_6LXkk_R4GEUUx1uqF4y24" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
