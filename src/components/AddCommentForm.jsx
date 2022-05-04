import { useState, useContext } from 'react';
import CommentContext from '../context/CommentsContext';
import Button from './Button';

function AddCommentForm() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [comment, setComment] = useState();
  const { currentUser, addComment } = useContext(CommentContext);

  const handleTextChange = (e) => {
    if (comment === '') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    if (comment !== '') {
      const newComment = {
        content: comment,
        createdAt: '1 Month',
        score: 0,
        username: 'juliusomo',
        user: {
          image: {
            png: './assets/images/avatars/image-juliusomo.png',
            webp: './assets/images/avatars/image-juliusomo.webp'
          },
          username: 'juliusomo'
        },
        replies: []
      };

      addComment(newComment);

      setComment('');
    }

    e.preventDefault();
  };
  return (
    <form className="add-comment-form" onSubmit={handleSubmit}>
      {currentUser.map((user, index) => (
        <img
          key={index}
          src={user.currentUser.image.webp}
          alt="Current user image"
        />
      ))}
      <textarea
        name="add-comment"
        placeholder="Add comment..."
        value={comment}
        onChange={handleTextChange}
      ></textarea>
      <Button
        className="btn btn-send"
        type="submit"
        value="Send"
        isDisabled={btnDisabled}
      >
        Send
      </Button>
    </form>
  );
}
export default AddCommentForm;
