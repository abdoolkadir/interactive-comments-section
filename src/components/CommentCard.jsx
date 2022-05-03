import { FaReply } from 'react-icons/fa';
import amy from './assets/images/avatars/image-amyrobson.png';

function CommentCard({ score, image, name, timestamp, comment }) {
  return (
    <div className="comment-card">
      <div className="comment-ratings">
        <button className="btn-plus">+</button>
        <span>12</span>
        <button className="btn-minus">-</button>
      </div>
      <div className="comment-area">
        <div className="comment-header">
          <div className="profile-info">
            <img src={amy} alt="" />
            <span>Amyrobson</span>
            <span className="timestamp">1 Month ago</span>
          </div>
          <a href="#" className="btn-reply">
            <FaReply />
            <span>Reply</span>
          </a>
        </div>
        <div className="comment">
          Woah, your project looks awesome! How long have you been coding for?
          I'm still new, but think I want to dive into React as well soon.
          Perhaps you can give me an insight on where I can learn React? Thanks!
        </div>
      </div>
    </div>
  );
}
export default CommentCard;
