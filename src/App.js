import './App.css';
import AddCommentForm from './components/AddCommentForm';
import CommentCard from './components/CommentCard';
import Comments from './components/Comments';
import { CommentsProvider } from './context/CommentsContext';

function App() {
  return (
    <CommentsProvider>
      <div className="container">
        <Comments />
        <AddCommentForm />
      </div>
    </CommentsProvider>
  );
}

export default App;
