a.	¿Qué son los FormControl, FormGroup?
FormControl: Un FormControl es un objeto que se utiliza en los formularios de Angular para tener control sobre su valor y estado. Creamos un FormControl con un valor inicial de “some value”. Luego, podemos acceder a su valor utilizando ctrl.value. Además, puede se pueden combinar varios FormControl en un FormGroup para manejar formularios más complejos.
FormGroup: Es un conjunto de FormControls. El estado de un FormGroup depende del estado de todos sus objetos. Si uno de los FormControl es inválido, el grupo entero también se considera inválido.

b.	¿Cómo se detectan los cambios en los formularios reactivos? (subscribirse)
Para detectar cambios en este control, podemos suscribirnos a su evento valueChanges
nombreControl.valueChanges.subscribe((nuevoValor) => {
  console.log('Nuevo valor:', nuevoValor);
});

c.	¿Cómo se vinculan los formularios reactivos con la interfaz de usuario Angular?
Se importa el módulo ReactiveFormsModule en app.module.ts. Se crean los FormControls Y FormGroups. En el archivo de plantilla html, se vinculan los campos a los FormControl utilizando la directiva  [formControl]. 

d.	¿Cómo se envían los datos del formulario reactivos a un servidor en Angular?
Cuando el usuario hace clic en el botón “Enviar”, se llama al método onSubmit().
Dentro de onSubmit(), puedes acceder a los valores del formulario utilizando this.myForm.value.
Utiliza el servicio HttpClient para enviar los datos al servidor mediante una solicitud POST.

e.	¿Para qué sirve el operador reactivo switchmap?
El operador switchMap en RxJS es una herramienta poderosa para transformar y gestionar flujos de datos.
El operador switchMap toma cada emisión del observable fuente y la proyecta a un nuevo observable interno. En cada emisión, el observable interno anterior se cancela y se suscribe al nuevo observable.
La principal diferencia entre switchMap y otros operadores de aplanamiento es su efecto de cancelación.
En cada emisión, se cancela el observable interno anterior y se inicia uno nuevo.
Esto es útil en escenarios como los campos de autocompletado, donde no te importa la respuesta de la solicitud anterior cuando llega una nueva entrada.

f.	Proporciona un ejemplo de un formulario reactivo en Angular que incluya validación de campos.






# Mayo13

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
