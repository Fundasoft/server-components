import db from '../../../db';
import Button from './Button';

function EmptyNote () {
  async function createNoteAction() {
    // Server Action
    'use server';
    
    await db.notes.create();
  }

  return <Button onClick={createNoteAction}/>;
}

export default EmptyNote;
