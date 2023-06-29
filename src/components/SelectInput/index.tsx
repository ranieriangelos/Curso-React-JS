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
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectImputProps> = ({options, onChange, defaultValue}) => {
  return (
    <div>
      <Container> 
          <select onChange={onChange} defaultValue={defaultValue}>{
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
