interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
