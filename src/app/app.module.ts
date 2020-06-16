import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';


import { BookService }  from './book.service';
import { AppRoutingModule } from 'src/app-routing.module';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookUpdateComponent } from './book-update/book-update.component';


@NgModule({
  imports: [     
        BrowserModule,
	FormsModule,
	AppRoutingModule,
	BrowserAnimationsModule
  ],
  declarations: [
        AppComponent,
        BookComponent,
	AddBookComponent,
	BookDetailComponent,
	BookUpdateComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } 