import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../classes/marcador.class";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MapaEditarComponent } from "./mapa-editar/mapa-editar.component";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit() {
    this.marcadores = JSON.parse(
      localStorage.getItem("Marcadores")
    ) as Marcador[];
  }

  guardarStorage() {
    localStorage.setItem("Marcadores", JSON.stringify(this.marcadores));
  }

  agregarMarcador(evento: Event) {
    const coords: { lat: number; lng: number } = evento["coords"];
    const nuevoEvento = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoEvento);
    this.guardarStorage();
    this.snackBar.open("Marcador agregado", "Cerrar", { duration: 5000 });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: "250px",
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackBar.open(
        "¡Marcador actualizado satisfactoriamente!",
        "Cerrar",
        { duration: 4900 }
      );
    });
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open("Marcador agregado", "Cerrar", { duration: 5000 });
  }
}
