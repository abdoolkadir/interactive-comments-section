import { useContext } from 'react';
import CommentCard from './CommentCard';
import CommentContext from '../context/CommentsContext';
import Reply from './Reply';

function Comments() {
  const { commentData } = useContext(CommentContext);
  return (
    <div className="comments-container">
      {commentData.map((comment) => (
        <div className="comment-container" key={comment.id}>
          <CommentCard
            image={comment.user.image.webp}
            username={comment.user.username}
            comment={comment.content}
            timestamp={comment.createdAt}
            score={comment.score}
          />
          <Reply replies={comment.replies} />
        </div>
      ))}
    </div>
  );
}
export default Comments;
