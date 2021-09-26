const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener('click', function () {
	const result = add(+input1.value, +input2.value);
	console.log(result);
});


/**
 * In the last exercise with Vanilla Javascript, we wrote some extra code to avoid an error.
 * I don't really want this to happen, I want to make sure that we can't even pass strings because 'add' should be a function that only operates on numbers so we don't need to check if we get a number or not, and that's where typescript can help us.
 * 
 * Typescript is a programming language that take our code and compile it into javascript.
 * By default even if Typescript finds errors, it will compile the code to a Javascript file, but can be configured.
 * To use typescript, we must first check that we have node and npm installed on our computer ('https://nodejs.org/es/').
 * If so, we must install typescript globally from the terminal with the command 'npm install -g typescript' ('https://www.typescriptlang.org/download').
 * 
 * Now add the above code of Vanilla Javascript in a file with the extension '.ts'.
 * If you are using the IDE Visual Studio Code, you can see on the terminal with the command 'tsc typescript-only.ts' how typescript analyze the code, identifies some errors and compile it into javascript file.
 * This is one great advantage of typescript over javascript because we can make sure that we are not making any mistakes.
 * 
 * The IDE of VSC It will be showing errors on the javascript files, when identified that some functions and constants were used in multiple files.
 * --> 1. Error. Implementation of duplicate function.
 * --> 2. Error. Cannot re-declare variable with block scope 'button', 'input1' and 'input2'.
 * It does not understand that we will never use both JS and TS files at the same time, we can ignore this errors for now.
 * 
 * Now we are now going to fix the errors of the terminal:
 * --> 1. Error. Property 'value' does not exist on type 'HTMLElement'.
 * I'm selecting an element by its ID, but Typescript doesn't analyse the HTML to know if this works, if I had a typo, I wouldn't be able to find it.
 * Even if it succeeds, it could be any other HTML element without a property value that I can access.
 * Typescript forces us to be more explicit to be clearer about your intentions and verify your code.
 * We could inform Typescript that we are sure we will get an element by adding an exclamation mark, so it will never return a null value, it will always find an element because it double-checks that ID.
 * Also, since I know it will always be an input element, we can use a syntax called 'typecasting' by adding that it is an 'HTMLInputElement'.
 * --> 2. The 'num1' and 'num2' parameters has a type of "any" implicitly, but a more appropriate type can be inferred from usage.
 * An argument of type string is not assignable to parameter of type number, so the problem here is that typescript understands that what we get on the value property of our input element will be a string.
 * We can specify what type of data we expect by defining in the function parameter itself that it is of type number.
 * --> 3. Error. Argument of type 'string' is not assignable to parameter of type 'number'.
 * The value of the input element will always be a string, and since we want it to be of type number, we must convert it using a '+' sign in front of it.
 * 
 * We compile this code again by repeating that command and now it compiles without errors.
 * If we open the generated Javascript file we see that the Typescript syntax has disappeared.
 * Typescript is used to evaluate the code, find potential errors and output a Vanilla Javascript file.
 * Typescript forces us to write better, cleaner and less error-prone code.
 * We fixed the bugs by ‘casting' our inputs before we pass them to the function.
 * And finally in the HTML file we always import the js files because the browser cannot execute the Typescript files.
 */