import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="green">
      <div>Children content</div>
    </ChildAsFC>
  );
};

export default Parent;
