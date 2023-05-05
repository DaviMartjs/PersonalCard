import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditCustomerComponent } from './components/user/edit-user/edit-customer.component';
import { ViewCustomerComponent } from './components/user/view-user/view-customer.component';
import { RemoveCustomerComponent } from './components/user/remove-user/remove-customer.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { EditUserComponent } from './components/posts/edit-user/edit-user.component';
import { RemoveUserComponent } from './components/posts/remove-user/remove-user.component';
import { ViewUserComponent } from './components/posts/view-user/view-user.component';
import { UserComponent } from './pages/user/user.component';
import { PostsComponent } from './pages/posts/posts.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    RemoveUserComponent,
    AddPostComponent,
    EditUserComponent,
    RemoveUserComponent,
    ViewUserComponent,
    UserComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }