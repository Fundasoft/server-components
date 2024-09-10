const notes = [
  {
    id: 1,
    description: "No hago lo que digo",
    authorId: 1,
  },
  {
    id: 2,
    description: "Pienso lo que hago",
    authorId: 1,
  },
  {
    id: 3,
    description: "Permanente indiscreción",
    authorId: 2,
  },
];

const authors = [
  {
    id: 1,
    name: "Pepe",
  },
  {
    id: 2,
    name: "Dino",
  },
  {
    id: 3,
    name: "Arturo",
  },
];

const comments = [
  {
    id: 1,
    noteId: 1,
    comment: "This is awesome!",
  },
  {
    id: 2,
    noteId: 1,
    comment: "I'm upset!",
  },
  {
    id: 3,
    noteId: 2,
    comment: "No way",
  },
];

const db = {
  notes: {
    get: (id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(notes.filter(note => note.id == id)[0]);
        }, 500);
      });
    },
    create: (description = 'Empty note...', author = 0) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const { id: lastId } = notes.slice(-1).pop();
          const newNote = {
            id: new Number(lastId) + 1,
            description,
            authorId: author,
          };
          notes.push(newNote);
          resolve(newNote);
        }, 500);
      });
    },
  },
  authors: {
    get: (id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(authors.filter(author => author.id == id)[0]);
        }, 500);
      });
    },
  },
  comments: {
    get: (id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(comments.filter(comment => comment.noteId == id));
        }, 500);
      });
    },
  }
};

export default db; 
