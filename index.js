import Express from 'express'

const app = Express()

app.use(Express.json())

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello world!" })
})

app.listen(3000, () => {
    console.log("Server starded!");
})