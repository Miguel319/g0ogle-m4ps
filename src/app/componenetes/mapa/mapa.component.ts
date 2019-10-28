import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../classes/marcador.class";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {}

  ngOnInit() {
    this.marcadores = JSON.parse(
      localStorage.getItem("Marcadores")
    ) as Marcador[];
  }

  agregarMarcador(evento: Event) {
    const coords: { lat: number; lng: number } = evento["coords"];
    const nuevoEvento = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoEvento);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem("Marcadores", JSON.stringify(this.marcadores));
  }
}
