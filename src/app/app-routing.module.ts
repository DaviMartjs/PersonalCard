import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [{
  path: 'user', component: UserComponent
}, { path: 'posts', component: PostsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
