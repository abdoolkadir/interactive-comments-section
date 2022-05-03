import CommentCard from './CommentCard';
import CommentContext from '../context/CommentsContext';
import { useContext } from 'react';

function Reply() {
  const { comments } = useContext(CommentContext);
  return (
    <div className="comment-reply">
      <div className="reply">
        {comments.map(({ replies }) =>
          replies.map((reply) =>
            replies.length > 0 ? (
              <CommentCard
                key={reply.id}
                image={reply.user.image.webp}
                username={reply.user.username}
                comment={reply.content}
                timestamp={reply.createdAt}
                score={reply.score}
              />
            ) : null
          )
        )}
      </div>
    </div>
  );
}
export default Reply;
