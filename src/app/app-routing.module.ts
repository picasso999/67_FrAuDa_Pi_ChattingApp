import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'chats/:id', component: ChatComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
