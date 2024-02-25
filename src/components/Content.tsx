import { ContentProps } from '../types';
import Part from './Part';

const Content = ({ courseParts }: ContentProps) => {
  return (
    <div>
      {courseParts.map((part, id) => (
        <Part {...part} key={id} />
      ))}
    </div>
  );
};

export default Content;
