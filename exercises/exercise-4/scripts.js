"use strict";
(function () {
    console.log("Hello from exercise 4!");
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
    }
    person.role.push("admin");
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
