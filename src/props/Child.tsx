interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h3>Child content</h3>
      <div>Color: {color}</div>
    </div>
  );
};

// Now TS know that it is React comp., not just function like example above
// React.FC === React.FunctionComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color, children }) => {
  return <div>Color: {color} {children}</div>;
};
