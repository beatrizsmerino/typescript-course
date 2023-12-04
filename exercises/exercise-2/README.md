# TypeScript course

## 📚 Exercise 2

In the last exercise with **Vanilla Javascript**, we wrote some extra code to avoid an error.  
I don't really want this to happen, I want to make sure that we can't even pass strings because `add()` should be a function that only operates on numbers so we don't need to check if we get a number or not, and that's where **TypeScript** can help us.

### 📄 **Getting started with TypeScript**

> **TypeScript** is a programming language that take our code and compile it into **JavaScript**.

By default even if **TypeScript** finds errors, it will compile the code to a **JavaScript** file, but can be configured.  
To use **TypeScript**, we must first check that we have `node` and `npm` installed on our computer ([https://nodejs.org/es/](https://nodejs.org/es/)).  
If so, we must install **TypeScript** globally from the terminal with the command `npm install -g typescript` ([https://www.typescriptlang.org/download](https://www.typescriptlang.org/download)).

Now add the above code of **Vanilla Javascript** in a file with the extension `.ts`.  
If you are using the **IDE Visual Studio Code**, you can see on the terminal with the command `tsc typescript-only.ts` how **TypeScript** analyze the code, identifies some errors and compile it into **JavaScript** file.  
This is one great advantage of **TypeScript** over **JavaScript** because we can make sure that we are not making any mistakes.

### 📄 **Understanding the bugs**

🔥 The **IDE VSC** will be showing errors on the **JavaScript** files, when identified that some functions and constants were used in multiple files.

1. 🐛 _Error. Implementation of duplicate function._
2. 🐛 _Error. Cannot re-declare variable with block scope 'button', 'input1' and 'input2'._

✅ It does not understand that we will never use both **JS** and **TS** files at the same time, we can ignore this errors for now.

🔥 Now we are now going to fix the errors of the terminal:

1. 🐛 _Error. Property 'value' does not exist on type 'HTMLElement'._  
   I'm selecting an element by its ID, but **TypeScript** doesn't analyse the HTML to know if this works, if I had a typo, I wouldn't be able to find it. Even if it succeeds, it could be any other HTML element without a property value that I can access.

    > **TypeScript** forces us to be more explicit to be clearer about your intentions and verify your code.

    ✅ We could inform **TypeScript** that we are sure we will get an element by adding the `!` sign, so it will never return a null value, it will always find an element because it double-checks that ID. Also, since I know it will always be an input element, we can use a syntax called `typecasting` by adding that it is an `HTMLInputElement`.

2. 🐛 _Error. The 'num1' and 'num2' parameters has a type of "any" implicitly, but a more appropriate type can be inferred from usage._  
   An argument of type string is not assignable to parameter of type number.  
   So the problem here is that **TypeScript** understands that what we get on the value property of our input element will be a string.  
   ✅ We can specify what type of data we expect by defining in the function parameter itself that it is of type number.
3. 🐛 _Error. Argument of type 'string' is not assignable to parameter of type 'number'._  
   The value of the input element will always be a string.  
   ✅ We want it to be of type number, we must convert it using a `+` sign in front of it.

### 📄 **In conclusion**

If we compile this code again by repeating that command and now we can see that it compiles without errors, in the generated **JavaScript** file we see that the **TypeScript** syntax has disappeared.  
We fixed the bugs by `casting` our inputs before we pass them to the function. And finally in the HTML file we import the **JavaScript** files because the browser cannot execute the **TypeScript** files.

> **TypeScript** is used to evaluate the code, find potential errors and output a **Vanilla Javascript** file. It forces us to write better, cleaner and less error-prone code.
