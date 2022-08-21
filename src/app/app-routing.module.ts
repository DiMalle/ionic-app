import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sociale',
    loadChildren: () => import('./sociale/sociale.module').then( m => m.SocialePageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
