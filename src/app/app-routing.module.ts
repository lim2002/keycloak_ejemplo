import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { MainComponent } from './components/main/main.component';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { AuthGuard } from './authentication-user.guard';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UserComponent},
  { path: 'post', component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
