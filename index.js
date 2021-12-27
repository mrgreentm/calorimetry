const inquirer = require('inquirer')

inquirer.prompt([
{name:'p1', message:'Qual a massa em gramas da substância?'},
{name:'p2', message: 'Qual o calor específico em [cal/g°C]?'},
{name: 'p3', message: 'Qual a temperatura inicial em °C da substância?'},
{name: 'p4', message: 'Qual a temperatura final em °C da substância?'},
])
.then(
    (answers) =>{
        const massa = parseFloat(answers.p1)
        const calorEspecifico = parseFloat(answers.p2)
        const initialTemp = parseFloat(answers.p3)
        const finalTemp = parseFloat(answers.p4)
        const variacao = finalTemp - initialTemp

        const calor = massa*calorEspecifico*(finalTemp-initialTemp)

        if(variacao>0){
            console.log(`Para que a variação ${variacao}°C ocorresse, foi necessário absorver ${calor} cal`);
        }else{
            console.log(`Para que a variação ${variacao}°C ocorresse, foi necessário ceder ${calor} cal`);

        }
    }


    )
.catch(erro => console.log(erro))