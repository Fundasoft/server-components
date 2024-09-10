import CreateNote from './components/create-note';


export default function Notes({ params }) {
  return (
    <div>
      <p>Nueva nota:</p>
      <CreateNote />
    </div>
  );
}