import express from 'express';

const app = express();

app.get('/', (req,res) => {
    return res.send({message: 'AAAAAAAA'})
})

app.listen(3333, () => {
    console.log('O MONSTRO TA SAINDO DA JAULA')
})