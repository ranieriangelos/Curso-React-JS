import React, {useMemo, useState, useEffect} from 'react';
import {Container, Content, Filters} from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { useParams } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listofMonth from '../../utils/month';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';




const List: React.FC = ({}) => {


    interface IData{
        id: string;
        description: string;
        amountFormated: string;
        frequency: string;
        dataFormated: string;
        tagColor: string;
    }



    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente','eventual']);
    const { type } = useParams<{ type: string }>();
    


//*---------- Esse codigo verifica as páginas da mesma forma que o "const pageData", vou deixar comentado para não esquecer como faz
 
//const title = useMemo(() => {
    //  return type === 'entry-balance' ? 'Entradas' : 'Saidas';
    //}, [type]);

    //const lineColor = useMemo(() => {
    //    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
    //  }, [type]);

    //const listData = useMemo(() => {
    //    return type === 'entry-balance' ? gains : expenses;
    //  }, [type]);


    const pageData =useMemo(() =>{
        return type === 'entry-balance' ?
            {
                title: 'Entradas',
                lineColor: '#4E41F0',
                listData: gains

            } : {
                title: 'Saidas',
                lineColor: '#E44C4E',
                listData: expenses
            }
        },
     []);

      
    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        pageData.listData.forEach(item =>{
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year =>{
            return{
                value: year,
                label: year,
            }
        });

    },[pageData]);


    const month = useMemo(() => {
            return listofMonth.map((month, index)=>{
                return{
                    value: index + 1,
                    label: month,
                }
            });
           
    },[pageData]);

    
    const handleFrequencyClick = (frequency: string) => {
        const alredySelected = selectedFrequency.findIndex(item => item === frequency);
        if (alredySelected >= 0){
            const filtered = selectedFrequency.filter(item => item != frequency);
                setSelectedFrequency(filtered);
            } else {   
                 setSelectedFrequency((prev) =>[...prev, frequency]);
            }
    }


    const handleMonthSelected = (month: string) =>{
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch(error){
            throw new Error('Valor invalido para o mes.')
        }
    }


    const handleYearSelected = (year: string) =>{
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch(error){
            throw new Error('Valor invalido para o Ano, só é aceito números inteiros.')
        }
    }


    useEffect(() =>{
       const filteredDate = pageData.listData.filter(item =>{
            const date = new Date(item.date);
            const month = Number(date.getMonth() + 1);
            const year = Number(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
       });


    const formatedData = filteredDate.map(item =>{
        return{
            id: String ( new Date().getTime()) + item.amount,
            description: item.description,
            amountFormated: formatCurrency(Number(item.amount)),
            frequency: item.frequency,
            dataFormated: formatDate(item.date),
            tagColor: item.frequency === 'recorrente' ? "#E44C4E"  : "#4E41F0"
        }
    })
    
    
    setData(formatedData);
    },[pageData.listData, monthSelected, yearSelected, selectedFrequency]);


    return(
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor} >
                <SelectInput options={month} onChange={(e) => handleMonthSelected(e.target.value) } defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected}/>            
            </ContentHeader>

          
            <Filters>
                <button type="button"
                className={`tag-filter tag-filter-recurrent
                ${selectedFrequency.includes('recorrente') && 'tag-activited'}`}
                onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button type="button"
                className={`tag-filter tag-filter-eventual
                ${selectedFrequency.includes('eventual') && 'tag-activited'}`}
                onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
            </Filters>


            <Content>
                {
                    data.map(item =>(
                        <HistoryFinanceCard 
                        key= {item.id}
                        tagColor={item.tagColor} 
                        title={item.description}
                        subtitle={item.dataFormated}
                        amount={item.amountFormated} 
                        children={undefined} />
                    ))    
                }
            </Content>
        </Container>
    );
}

export default List;