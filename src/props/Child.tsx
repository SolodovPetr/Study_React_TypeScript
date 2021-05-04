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
