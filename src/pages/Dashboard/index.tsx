import React, {useMemo, useState, useEffect} from 'react';
import {Container, Content} from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import listofMonth from '../../utils/month';
import Walletbox from '../../components/Walletbox';
import MessageBox from '../../components/MessageBox';
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

import expenses from'../../repositories/expenses';
import gains from '../../repositories/gains';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Ranieri', label: 'Ranieri'},
        {value: 'Jose', label: 'Jose'},
        {value: 'Maria', label: 'Maria'},
    ]
    

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item =>{
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

    },[]);


    const month = useMemo(() => {
            return listofMonth.map((month, index)=>{
                return{
                    value: index + 1,
                    label: month,
                }
            });
           
    },[]);

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
        
    
    const TotalExpenses = useMemo(() =>{
        let total: number = 0;

        expenses.forEach(item =>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth();

            if(month === monthSelected && year === yearSelected){
                try  {total += Number(item.amount)
                } catch{
                    throw new Error('Valor inválido! Valor deve ser um número')
                }
            } 
        });

        return total;
    }, [monthSelected, yearSelected]);



    const TotalGain = useMemo(() =>{
        let total: number = 0;

        gains.forEach(item =>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth();

            if(month === monthSelected && year === yearSelected){
                try  {total += Number(item.amount)
                } catch{
                    throw new Error('Valor inválido! Valor deve ser um número')
                }
            } 
        });

        return total;
    }, [monthSelected, yearSelected]);



    var totalBalance = useMemo(() =>{
        return TotalGain - TotalExpenses; 
        console.log(totalBalance);
    },[TotalGain, TotalExpenses]);

    
    const Message = useMemo(() =>{
        if(totalBalance < 0){
            return{
                title:"Que triste!",
                description:'Neste mês você gastou mais do que deveria!',
                footerText:'Controle melhor seus gastos, e corte custos desnecessários.',
                icon: sadImg
            }
        } 
        else if(totalBalance == 0){
            return{
                title:"Ufa",
                description:'Neste mês quase ficamos no vermelho, tenha cuidado!',
                footerText:'No próximo mes, tente poupar seu dinheiro.',
                icon: happyImg
            }
        } else{
            return{
                title:"Muito Bem",
                description:'Sua Carteira está positiva!',
                footerText:'Continue assim, considere investir o seu saldo!',
                icon: happyImg
            }
        }
    }, [totalBalance]);


    const handleMonthSelected = (month: string) =>{
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch{
            throw new Error('Valor invalido para o mes.')
        }
    }


    const handleYearSelected = (year: string) =>{
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('Valor invalido para o Ano, só é aceito números inteiros.')
        }
    }


   
    

    return(
        <Container>
            <ContentHeader title="DashBoard" lineColor="#F97318" >

            <SelectInput options={month} onChange={(e) => handleMonthSelected(e.target.value) } defaultValue={monthSelected}/>
            <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected}/>            
            
            </ContentHeader>

            <Content>
                <Walletbox
                    title='Saldo'
                    amount={totalBalance}
                    footerlabel="Atualizado com base nas entradas e saidas"
                    icon="dolar"
                    color="#4E41F0"
                />

                <Walletbox
                    title="Entradas"
                    amount={TotalGain}
                    footerlabel="Atualizado com base nas entradas e saidas"
                    icon="arrowUp"
                    color="#F97318"
                />

                <Walletbox
                    title='Saidas'
                    amount={TotalExpenses}
                    footerlabel="Atualizado com base nas entradas e saidas"
                    icon="arrowDown"
                    color='#E44'
                />
            <MessageBox
                title={Message.title}
                description={Message.description}
                footerText={Message.footerText}
                icon={Message.icon}
            ></MessageBox>
            
            </Content>
            
        </Container>
        
    );
}

export default Dashboard;