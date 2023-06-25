import{Container} from './style';
import React, { ReactNode } from 'react';


interface ContentProps {
  children: ReactNode;
}

interface ISelectImputProps{
  options:{
    value: string | number;
    label: string | number;
  }[],
}

const SelectInput: React.FC<ISelectImputProps> = ({options}) => {
  return (
    <div>
      <Container> 
          <select>{
            options.map(option => (
               <option 
                  key={option.value}
                  value={option.value}>
                    {option.label}
                </option>
            ))
            }

          </select>
      </Container>
      
    </div>
  );
};

export default SelectInput;
