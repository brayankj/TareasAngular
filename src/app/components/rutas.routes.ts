import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { ListanotasComponent } from './listanotas/listanotas.component';
import { ListaComponent } from './lista/lista.component';

export const paths = {
    mynotes : 'my-notes',
    notaid: 'note/:id'
}

const pagesRoutes : Routes = [
    { path: '', 
        component : PrincipalComponent,
        children: [
            { path: paths.mynotes, component: ListanotasComponent },
            { path: paths.notaid, component: ListaComponent },
            { path: '', redirectTo: 'my-notes', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);