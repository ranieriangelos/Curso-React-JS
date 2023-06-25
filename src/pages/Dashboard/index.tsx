import React from 'react';
import {Container} from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
    
const options = [
    {value: 'Janeiro', label: 'Janeiro'},
    {value: 'Jose', label: 'Jose'},
    {value: 'Maria', label: 'Maria'},
    {value: 'Maria', label: 'Maria'}
]

    return(
        <Container>
            <ContentHeader title="DashBoard" lineColor="#F97318" >
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;