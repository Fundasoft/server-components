import Note from './components/note';


export default function Notes({ params }) {
  return (
    <div>
      <p>{`Nota ${params.id}:`}</p>
      <Note id={params.id}/>
    </div>
  );
}