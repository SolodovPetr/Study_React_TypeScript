interface ChildProps {
  color: string;
  clickHandler: () => void
}

export const Child = ({ color, clickHandler }: ChildProps) => {
  return (
    <div>
      <div>Color: {color}</div>
      <button onClick={clickHandler} type="button">Push</button>
    </div>
  );
};

// Now TS know that it is React comp., not just function like example above
// React.FC === React.FunctionComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color, children, clickHandler }) => {
  return <div>Color: {color} {children}</div>;
};
