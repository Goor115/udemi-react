import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosActions({ resetTodos, deleteComplatedTodos }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Complated Todos" onClick={deleteComplatedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
