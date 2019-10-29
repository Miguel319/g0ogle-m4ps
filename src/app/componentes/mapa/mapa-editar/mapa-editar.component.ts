import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-mapa-editar",
  templateUrl: "./mapa-editar.component.html",
  styleUrls: ["./mapa-editar.component.css"]
})
export class MapaEditarComponent implements OnInit {
  fGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MapaEditarComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.fGroup = this.fb.group({
      titulo: this.data.titulo,
      desc: this.data.desc
    });
  }

  guardarCambios() {
    console.log(this.fGroup.value);
    console.log("Hello");

    this.dialogRef.close(this.fGroup.value);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
