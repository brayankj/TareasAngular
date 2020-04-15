import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListasService } from '../../services/listas.service';

export interface DialogData {
  id:string,
  name:string,
  dialog:string,
  Lista,
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formu:FormGroup;
  
  constructor(
    public _listas : ListasService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData
  ) {  }

  ngOnInit() {
    this.crearForm();
  }

  crearForm(){
    this.formu = this.fb.group({
      name: [this.data.name,Validators.required]
    });
  }

  guardar(){
    if(this.formu.valid){
      let name:string = this.formu.value.name;
      this._listas.crearLista(name);
      this.onNoClick();
    } 
  }

  editar(){
    if(this.formu.valid){
      let lista = this.data.Lista;
      lista.titulo = this.formu.value.name;
      this._listas.editarLista(lista);
      this.onNoClick();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get nombreValidator(){
    return this.formu.get('name').invalid && this.formu.get('name').touched
  }

}
