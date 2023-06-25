import{Container, Tag} from './style';
import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

interface IHistoryFinanceCardProps{
    children: React.ReactNode;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}


const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({  
    tagColor,
    title,
    subtitle,
    amount,
 }) => {
  return (
    <div>
      <Container> 
        <Tag color={tagColor}/>
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
      </Container>
     
    </div>
  );
};

export default HistoryFinanceCard;
