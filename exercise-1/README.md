# TypeScript course

## 📚 Exercise 1

🐛 _In this exercise, if you enter for example, `10` and `5` on the inputs, you might expect to see `15` as a result but instead you see `105`. This it is a logical error in our application._

In **Javascript** when you access the value of an input, it is always a string, no matter if the input type is a number.
So when passing two string to this function, they get concatenated instead of added mathematically.

✅ How we are using **Vanilla Javascript** we need to check the type of the values before operating on them.
To fix this, if they are not numbers, we can use the `+` operator to convert the string to a number.
