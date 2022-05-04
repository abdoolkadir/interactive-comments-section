import CommentCard from './CommentCard';

function Reply({ replies }) {
  return (
    <>
      {replies.length > 0 && (
        <div className="comment-reply">
          {replies.map((reply) => (
            <div className="reply" key={reply.id}>
              <CommentCard
                image={reply.user.image.webp}
                username={reply.user.username}
                comment={reply.content}
                timestamp={reply.createdAt}
                score={reply.score}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Reply;
