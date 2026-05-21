type UserID = string | number;

interface AccountDetails {
    readonly id: UserID;
    email?: string;
}

interface UserProfile extends AccountDetails{
    username: string;
    creationDate: Date;
}

function summarizeUserProfile(user: UserProfile): string {
    if (user.email) {
    const summary = `${user.username} (${user.creationDate}) ${user.email}`;
    return summary ;
    }
    else {
    return `${user.username} (${user.creationDate}) - No email on file`;
    }
}

const userEmail: UserProfile = { id: 123, username: "Bob123", email: "bob123@gmail.com", creationDate: new Date("02/02/2021") };
const userWithoutEmail: UserProfile = { id: 456, username: "Alice456", creationDate: new Date("01/01/2020")};

console.log(summarizeUserProfile(userEmail));
console.log(summarizeUserProfile(userWithoutEmail));