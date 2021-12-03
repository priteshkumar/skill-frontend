let tools = ["emmet", "prettier", "linter"];
for (let index = 0; index < tools.length; index++) {
  const element = tools[index];
  console.log(element);
}

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}
