import express, { NextFunction, Request, Response } from 'express'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TODO: Add routing middleware here

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("This is not the URL you are looking for!");
})

app.listen(3000);