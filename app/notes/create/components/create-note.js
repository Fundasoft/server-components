import db from '../../../db';
import Button from './button-note';

function EmptyNote () {
  async function createNoteAction() {
    // Server Action
    'use server';
    
    const result = await db.notes.create();

    return result;
  }

  return <Button onClick={createNoteAction}  />;
}

export default EmptyNote;
