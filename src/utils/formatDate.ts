const formatDate = (date: string): string =>{
   const dateformated = new Date(date);
   const year = dateformated.getFullYear();

   const day = dateformated.getDate() > 9 
   ? dateformated.getDate() : `0${dateformated.getDate()}`;

   const month = (dateformated.getMonth() + 1) > 9 
   ? dateformated.getMonth() + 1: `0${dateformated.getMonth() + 1}`  ;


   return `${day}/${month}/${year}`;

}

export default formatDate;