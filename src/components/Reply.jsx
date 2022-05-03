import CommentCard from './CommentCard';

function Reply({ replies }) {
  return (
    <div className="comment-reply">
      <div className="reply">
        {replies.length > 0 ? (
            replies.map((reply) => (
              <CommentCard
                key={reply.id}
                image={reply.user.image.webp}
                username={reply.user.username}
                comment={reply.content}
                timestamp={reply.createdAt}
                score={reply.score}
              />
            ))
          )
            : <p>No replies yet</p>}
      </div>
    </div>
  );
}
export default Reply;
