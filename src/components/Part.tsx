import { CoursePart } from '../types';
import '../index.css';

const Part = (props: CoursePart) => {
  switch (props.kind) {
    case 'basic':
      return (
        <div>
          <h4>
            {props.name} {props.exerciseCount}
          </h4>
          <em>{props.description}</em>
        </div>
      );
    case 'group':
      return (
        <div>
          <h4>
            {props.name} {props.exerciseCount}
          </h4>
          <em>project exercises {props.groupProjectCount}</em>
        </div>
      );
    case 'background':
      return (
        <div>
          <h4>
            {props.name} {props.exerciseCount}
          </h4>
          <em>{props.description}</em>
          <p>
            submit to{' '}
            <a href={props.backgroundMaterial} target='_blank'>
              {props.backgroundMaterial}
            </a>
          </p>
        </div>
      );
    case 'special':
      return (
        <div>
          <h4>
            {props.name} {props.exerciseCount}
          </h4>
          <em>{props.description}</em>
          <p>required skills: {props.requirements.join(', ')}</p>
        </div>
      );
  }
};

export default Part;
