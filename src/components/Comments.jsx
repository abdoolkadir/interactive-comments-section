import { useContext } from 'react';
import CommentCard from './CommentCard';
import CommentContext from '../context/CommentsContext';
import Reply from './Reply';

function Comments() {
  const { comments } = useContext(CommentContext);
  return (
    <div className="comments-container">
      {comments.map((comment) => (
        <div className="comment-container">
          <CommentCard
            key={comment.id}
            image={comment.user.image.webp}
            username={comment.user.username}
            comment={comment.content}
            timestamp={comment.createdAt}
            score={comment.score}
          />
          <Reply />
        </div>
      ))}
    </div>
  );
}
export default Comments;
