import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TodosComponent } from './pages/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { SortComponent } from './pages/todos/sort/sort.component';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';
import { FilterTodoPipe } from './shared/pipes/filterTodo/filter-todo.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutProjectComponent } from './pages/about/about-project/about-project.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { UserComponent } from './pages/about/user/user.component';

import { ModalModule } from 'ngx-bootstrap/modal';
// import { EditTodoComponent } from './pages/todos/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TodosComponent,
    TodoItemComponent,
    NewTodoComponent,
    SortComponent,
    HighlightDirective,
    FilterTodoPipe,
    PageNotFoundComponent,
    AboutComponent,
    AboutProjectComponent,
    AboutUsComponent,
    UserComponent,
    // EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewTodoComponent],
})
export class AppModule {}
