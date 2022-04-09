type Props = {
  onClick(): void;
  label: string;
}

export const Button = ({ onClick, label }: Props): JSX.Element => {
  return (
    <button className="ui red google button" onClick={onClick}>
      <i className="google icon"/>
      {label}
    </button>
  );
};
