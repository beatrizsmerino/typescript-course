"use strict";
(function () {
    console.log("Hello from exercise 4!");
    // const person: object = {
    // 	name: "Beatriz", // string
    // 	age: 30, // number
    // };
    // console.log(person.name); // Throws an error. The object type it is too generic.
    // person.nickname = "beatrizsmerino"; // Throws an error. You cannot add a value to a property that does not previously exist in the object.
    var person = {
        name: "Beatriz",
        age: 30,
        hobbies: ["sports", "cooking"],
        role: [2, "author"],
        gender: "female",
    };
    console.log(person.name);
    var favoriteActivities;
    favoriteActivities = ["Sports", 2];
    for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
        var hobby = _a[_i];
        console.log(hobby.toUpperCase(), hobby.length);
        // console.log(hobby.map(item=> item)); // Throws an error.
    }
    person.role.push("admin");
    // person.role[1] = 10; // Throws an error. The tuple 'role' expects a string value.
    // person.role = [0, "admin", "user"]; // Throws an error. The tuple 'role' expects 2 values of a specific type and order.
    // const ADMIN = 0;
    // const AUTHOR = 1;
    // const READ_ONLY = 2;
    // enum Role {
    // 	ADMIN, // 0
    // 	AUTHOR, // 1
    // 	READ_ONLY // 2
    // }
    var Role;
    (function (Role) {
        Role[Role["ADMIN"] = 5] = "ADMIN";
        Role[Role["AUTHOR"] = 6] = "AUTHOR";
        Role["READ_ONLY"] = "Read only";
    })(Role || (Role = {}));
    var user = {
        role: Role.ADMIN,
    };
    if (user.role === Role.READ_ONLY) {
        console.log("User permission is read-only");
    }
    else {
        console.log("User permission is not read-only");
    }
})();
