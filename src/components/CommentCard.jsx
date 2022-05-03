import { FaReply } from 'react-icons/fa';

function CommentCard({ score, image, username, timestamp, comment }) {
  return (
    <div className="comment-card">
      <div className="comment-ratings">
        <button className="btn-plus">+</button>
        <span>{score}</span>
        <button className="btn-minus">-</button>
      </div>
      <div className="comment-area">
        <div className="comment-header">
          <div className="profile-info">
            <img src={image} alt="User image" />
            <span>{username}</span>
            <span className="timestamp">{timestamp}</span>
          </div>
          <a href="#" className="btn-reply">
            <FaReply />
            <span>Reply</span>
          </a>
        </div>
        <div className="comment">{comment}</div>
      </div>
    </div>
  );
}
export default CommentCard;
