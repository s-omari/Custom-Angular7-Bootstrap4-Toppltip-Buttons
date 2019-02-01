import { DemoButtonsComponent } from './demo-buttons.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:DemoButtonsComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forChild(routes);
