import{Container} from './styles';
import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
        <Container> 
            {children}
      </Container>
     
  );
};

export default Content;
