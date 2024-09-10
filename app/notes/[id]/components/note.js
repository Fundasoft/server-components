import db from '../../../db';
import { Suspense } from 'react';
import Expandable from './expandable';
import Comments from './comments';

async function Note({id}) {
  const note = await db.notes.get(id);
  
  const commentsPromise = db.comments.get(id);
  
  return (
    <div>
      <Author id={note?.authorId} />
      <Expandable key={note.id}>
          <p>{note?.description}</p>
      </Expandable>
      <Suspense>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
  
async function Author({id}) {
  const author = await db.authors.get(id);
  
  return <span>By: {author.name}</span>;
}

export default Note;