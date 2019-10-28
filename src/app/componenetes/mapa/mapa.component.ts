import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../classes/marcador.class";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private snackBar: MatSnackBar) {}

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
    this.snackBar.open("Marcador agregado", "Cerrar", { duration: 5000 });
  }

  guardarStorage() {
    localStorage.setItem("Marcadores", JSON.stringify(this.marcadores));
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open("Marcador agregado", "Cerrar", { duration: 5000 });
  }
}
