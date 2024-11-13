/*
-Para crir o meu sistema de tarefas eu presciso de :
- criar tarefas;
-editar tarefas;
-deletar tarefas;
-mostrar a listasdas tarefas;
Guilherme
FATTO.gui
*/
import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/lista',async (req, res) => {
   await prisma.tarefa.create({
        data:{
            nome: req.body.nome,
            custo: req.body.custo,
            datalimite: req.body.datalimite
        }
    })

    res.status(201)
})

app.get('/lista',async (req, res) => {
    const lista = await prisma.tarefa.findMany()
    res.status(200).json(lista)
});

app.put('/lista/:id',async (req, res) => {
    await prisma.tarefa.update({
        where: {
            id:req.params.id
        },
         data:{
             nome: req.body.nome,
             custo: req.body.custo,
             datalimite: req.body.datalimite
         }
     })
 
     res.status(201)
 })

 app.delete('/lista/:id',async (req, res) =>{
    await prisma.tarefa.delete({
        where: {
            id:req.params.id,
        },
    })

    res.status(200).json({ message: 'Tarefa excluida com sucesso!'})
 })

app.listen(3000)
