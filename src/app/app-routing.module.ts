import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { DisplaysComponent } from './displays/displays/displays.component';
import { LoginComponent } from './auth/login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace/marketplace.component';
import { MediaComponent } from './media/media/media.component';

const routes: Routes = [
  { path: 'displays', component: DisplaysComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'marketplace', component: MarketplaceComponent, canActivate: [AuthGuard] },
  { path: 'media', component: MediaComponent, canActivate: [AuthGuard] },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
