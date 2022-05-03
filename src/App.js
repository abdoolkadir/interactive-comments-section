import './App.css';
import CommentCard from './components/CommentCard';
import Comments from './components/Comments';
import { CommentsProvider } from './context/CommentsContext';

function App() {
  return (
    <CommentsProvider>
      <div className="container">
        <Comments />
        {/* <CommentCard /> */}
      </div>
    </CommentsProvider>
  );
}

export default App;
