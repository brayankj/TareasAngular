import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PAGES_ROUTES } from './rutas.routes';
import { MaterialModels } from '../material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PrincipalComponent } from '../components/principal.component';
import { MenuComponent } from './menu/menu.component';
import { ListanotasComponent } from './listanotas/listanotas.component';
import { DialogComponent } from './dialog/dialog.component';
import { ListaComponent } from './lista/lista.component';
import { DialogItemComponent } from './dialog-item/dialog-item.component';

@NgModule({
    declarations: [
        PrincipalComponent,
        MenuComponent,
        ListanotasComponent,
        DialogComponent,
        ListaComponent,
        DialogItemComponent
    ],
    exports: [
        PrincipalComponent
    ],
    imports: [
        PAGES_ROUTES,
        MaterialModels,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    entryComponents: [
        DialogComponent,
        DialogItemComponent
    ]
})

export class PagesModule {}