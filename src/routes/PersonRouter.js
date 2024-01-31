import { Router } from "express";
import { list } from "../controllers/PersonController.js";
const personRouter = Router();
const listPerson = list();

personRouter.get('/', (req, res) => {
    const names = []
    for (let i = 0; i < listPerson.length; i++) {
        names.push(listPerson[i].name);
    }
    res.json({ names });
});

personRouter.get('/Biography', (req, res) => {
    const names = []
    for (let i = 0; i < listPerson.length; i++) {
        names.push(listPerson[i].name + ", sua biografia: "+ listPerson[i].biography);
    }
    res.json({ names });
});


personRouter.get('/important', (req, res) => {
    const names = []
    for (let i = 0; i < listPerson.length; i++) {
        names.push(listPerson[i].name + ", fato importante: " + listPerson[i].important);
    }
    res.json({ names });
});


export { personRouter };