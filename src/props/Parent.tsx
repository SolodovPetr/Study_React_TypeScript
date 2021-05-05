import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="green" clickHandler={ () => console.log('click handler')}>
      <div>Children content</div>
    </ChildAsFC>
  );
};

export default Parent;
