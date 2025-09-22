import express from 'express';
import { newsletterSubscribe } from '../controllers/newletterController.js';


const router =  express.Router();

router.post("/subscribe",newsletterSubscribe);

export default router;
