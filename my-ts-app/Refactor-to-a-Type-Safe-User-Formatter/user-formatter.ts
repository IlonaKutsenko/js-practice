 function formatUser(user: {name: string, age: number, occupation?: string}): string {
  // This line will cause a runtime error if 'user.occupation' is undefined.
  if (user.occupation) {
  const occupationUpper = user.occupation!.toUpperCase();
  const summary = `${user.name} (${user.age}) works as a ${occupationUpper}.`;
  return summary;
  }
  else { 
  return `${user.name} (${user.age}) is currently unemployed.`;
  }
}

const userWithOccupation = { name: "Alice", age: 30, occupation: "Engineer" };
const userWithoutOccupation = { name: "Bob", age: 25 };

console.log(formatUser(userWithOccupation));

// This next line will crash the program in a pure JavaScript environment.
console.log(formatUser(userWithoutOccupation));