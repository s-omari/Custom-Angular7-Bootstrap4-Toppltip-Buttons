import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routingComponents = [];
const routes: Routes = [
  { path: 'demo-buttons', loadChildren: './views/demo-buttons/demo-buttons.module#DemoButtonsModule' },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

