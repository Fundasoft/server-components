"use client";

import { use } from 'react';

function Comments({ commentsPromise }) {
  // NOTE: esto va a resumir la ejecucion de la promesa desde el server.
  // el renderizado se suspende hasta que la data esté disponible.
  const comments = use(commentsPromise);
  if (comments.length) {
    return comments.map(comment => <p key={comment.id}>{comment.comment}</p>);
  } else {
    return <div>No comments yet...</div>
  }
}

export default Comments;
