import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { BookComponent } from './app/book/book.component';

import { BookUpdateComponent } from './app/book-update/book-update.component';
import { BookDetailComponent } from './app/book-detail/book-detail.component';
import { AddBookComponent } from './app/add-book/add-book.component';

const routes: Routes = [
	{
	   path: 'book',
	   component: BookComponent
	},
	{
	   path: 'add-book',
	   component: AddBookComponent,
	   outlet: 'bookPopup'
	},	
	{
	   path: 'update-book/:book-id',
	   component: BookUpdateComponent,
	   outlet: 'bookPopup'
	},				
	{
	   path: 'book-detail',
	   component: BookDetailComponent,
	   outlet: 'bookList'
	},	
	{
	   path: '',
	   redirectTo: '/book',
	   pathMatch: 'full'
	}	
];
@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ }  