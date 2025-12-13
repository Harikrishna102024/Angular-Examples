1. What is Angular?

	- Angular is open source TypeScript based Framework and it is used to develop the single page web application.
	- Angular was developed by Google and it is written in TypeScript.
	- Angular contains set of TypeScript libraries that we need to import in our application to use features like Routing, Forms HTTP, etc.



2.Why do we use Angular?

	- Angular is used to develop the single page web applications.
	- We can reuse the angular components.
	- We can maintain clean and structured code.
	- We can easily build the scalable applications for big projects.



3.What is the difference between Angular Js and Angular?

	Angular Js
	- Angular Js work with JavaScript.
	- Angular Js follow the MVC based architecture
	- Angular Js performance is slow
	- Angular Js support only two-way data binding.	

	Angular
	- Angular work with TypeScript
	- Angular follow the component-based architecture.
	- Angular performance is fast.
	- Angular support the both one-way and two-way databinding.



4.What is SPA? 

	- SPA stands for single page application, which is web application, it loads only HTML and update content on the same page without refreshing the whole page.



5.What is Angular CLI?

	- Angular CLI stands for command line interface and it is used to create the stricture of an angular application.
	- It is also used to create New Projects, Components, Modules, Services, Directives Pipes, etc.
	
	

4.What is Components?

	- Components are the main building blocks of an angular applications.
	- Each component has a four component files, which is Html, Css, Ts and Spec.ts.
	- Html – for view.
	- Css – for styling.
	- Ts – for logic.
	- Spec.ts – for testing.

5.What is @Component?

	- @Componenet is a decorator.
	- It is used to define a component.
	- It links Html, css and ts files together.
	- @Component consists of three main properties 
		- selector
		- templateUrl
		- styleUrl

		selector:
			-  Selector is a tag name.
			- By using selector we can reuse the component.
			
		templateUrl:
			- templateUrl is a path.
			- It is used to link the Html file of a component.
			
		styleUrl:
			- styleUrl is a path.
			- It is sused to link the Css file of a component.



6.What is Decorator?
	
	- A decorator is a special notation and it is used to add the extra information to a class or property or method.
			
			Example: 
					 @Component({.....})
					 @NgModule({.....})
					 @Output()
					 @Input()
	


7.What is meta-data?

	- Meta-data is nothing but extra information which we write inside the decorator is called meta-data.
	
			Example: 
					 @Component({
					  selector: 'app-root',
					  templateUrl: './app.component.html',
					  styleUrl: './app.component.scss'
					})
					 

8.What is Data Binding?

	- Data binding is a mechanism to establish the connection between TypeScript file and HTML file.
	- There are different types of data-bidning.

		- One-way data binding.
		- Two-way data binding.

	One-way data binding:

		- One-way data binding means, it is a way to send the data in only one direction either TypeScript to HTML or HTML to 	TypeScript.


		Example:

			TypeScript

			import { Component } from '@angular/core';

			@Component({
				selector: 'app-one-way',
				templateUrl: './one-way.component.html',
				styleUrl: './one-way.component.scss'
			})
			export class OneWayComponent {

				name: string = 'harikrishna';
				age: number = 20;
			}

			HTML
			<p>Name :<span>{{name}}</span></p>
      		<p>Age :<span>{{age}}</span></p>
