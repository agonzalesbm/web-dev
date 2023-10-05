db.createCollection("todotasks");

db.todotasks.insert([
  {
    "NameTask": "Write a blog post",
    "Description":
      "A blog post about the latest trends in artificial intelligence.",
  },
  {
    "NameTask": "Build a new website",
    "Description": "A website for a new startup company.",
  },
  {
    "NameTask": "Develop a new app",
    "Description": "An app that helps people learn about the world around them.",
  }
]);