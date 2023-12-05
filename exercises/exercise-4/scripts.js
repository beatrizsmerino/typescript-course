"use strict";
(function () {
    console.log("Hello from exercise 4!");
    const person = {
        name: "Beatriz",
        age: 30,
        hobbies: ["sports", "cooking"],
        role: [2, "author"],
        gender: "female",
    };
    console.log(person.name);
    let favoriteActivities;
    favoriteActivities = ["Sports", 2];
    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase(), hobby.length);
    }
    person.role.push("admin");
    let Role;
    (function (Role) {
        Role[Role["ADMIN"] = 5] = "ADMIN";
        Role[Role["AUTHOR"] = 6] = "AUTHOR";
        Role["READ_ONLY"] = "Read only";
    })(Role || (Role = {}));
    const user = {
        role: Role.ADMIN,
    };
    if (user.role === Role.READ_ONLY) {
        console.log("User permission is read-only");
    }
    else {
        console.log("User permission is not read-only");
    }
})();
