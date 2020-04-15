import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ListaItem} from '../../class/listaItem.model';
import { Lista } from '../../class/lista.model'
import { ListasService } from '../../services/listas.service';

export interface DialogData {
  dialog:string,
  Lista
}

@Component({
  selector: 'app-dialog-item',
  templateUrl: './dialog-item.component.html',
  styleUrls: ['./dialog-item.component.css']
})
export class DialogItemComponent implements OnInit {

  Item:FormGroup;
  lista: Lista;
  constructor(
    public _lista: ListasService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData
  ){  }

  ngOnInit() {
    this.crearForm();
  }

  crearForm(){
    this.Item = this.fb.group({
      items: ['',Validators.required]
    });
  }

  guardar(){
    if(this.Item.valid){
      let desc = this.Item.value.items;
      const nuevoItem = new ListaItem (desc);
      this.lista = this.data.Lista;
      this.lista.items.push(nuevoItem);
      this._lista.guardarStorage();
      this.onNoClick();
    } 
  }

  editar(){
    if(this.Item.valid){
      console.log(this.Item.value);
      this.onNoClick();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get itemValidator(){
    return this.Item.get('items').invalid && this.Item.get('items').touched
  }

}
