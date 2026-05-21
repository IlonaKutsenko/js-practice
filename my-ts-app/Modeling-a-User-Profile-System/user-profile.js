"use strict";
function summarizeUserProfile(user) {
    if (user.email) {
        const summary = `${user.username} (${user.creationDate}) ${user.email}`;
        return summary;
    }
    else {
        return `${user.username} (${user.creationDate}) - No email on file`;
    }
}
const userEmail = { id: 123, username: "Bob123", email: "bob123@gmail.com", creationDate: new Date("02/02/2021") };
const userWithoutEmail = { id: 456, username: "Alice456", creationDate: new Date("01/01/2020") };
console.log(summarizeUserProfile(userEmail));
console.log(summarizeUserProfile(userWithoutEmail));
