import { Router } from 'express';
import 'dotenv/config';
import { Tudu } from "../database/models";
import { CorrectLimit, CorrectOffset, CorrectPage } from "../services/queryParamsServices";
const tudusRouter = Router();

tudusRouter.post('/', async (req, res, next) => {
    console.log(req.body)
    const { textTudu } = req.body
    const newTudu = await Tudu.create({ textTudu })

    return res.json(newTudu)
});

tudusRouter.get('/', async (req, res, next) => {
    let { page = 1, limit = 15} = req.query

    page = CorrectPage(page)
    limit = CorrectLimit(limit) as any
    const offset = CorrectOffset(limit, page)

    console.log("sdhbdsjhfbsfhf");
    const result = await Tudu.findAll(
        {
            limit,
            offset  
        }
    )
    const count = await Tudu.count()
    return res.json({ result, count })
});

tudusRouter.put('/:id', async (req, res, next) => {
    const {  textTudu } = req.body
    const { id } = req.params;
    const tudu = await Tudu.findByPk(id);
    if (tudu) {
        tudu.id = id ? id : tudu.tuduId;
        tudu.textTudu = textTudu ? textTudu : tudu.textTudu;
        await tudu.save();
    }
    return res.json(tudu);
});

tudusRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const tudu = await Tudu.findByPk(id);
    if (tudu) {
        tudu.destroy();
    }
    return res.json("Funfou");
});

export default tudusRouter;