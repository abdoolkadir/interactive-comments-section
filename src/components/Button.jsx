function Button({ children, type, isDisabled, btnType }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${btnType}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'btn',
  type: 'button',
  isDisabled: true
};
export default Button;
