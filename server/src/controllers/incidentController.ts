import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Incident } from '../types/index';

const prisma = new PrismaClient();

export const getIncidents = async(req: Request,res: Response) => {
    try {
        const { resolved} = req.query;
        const whereClause = resolved !== undefined ? { resolved: resolved === 'true' } : {};

        const Incidents = await prisma.incident.findMany({
            where: whereClause,
            include: {
                camera: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        });
        res.json(Incidents);
    }
    catch(error){
        console.error("Error fetching incidents:", error);
        res.status(500).json({ error: "Failed to fetch incidents" });
    }
};

export const resolveIncident = async(req: Request,res:Response) => {
    try{
        const {id} = req.params;

        const updatedIncident = await prisma.incident.update({
            where: { id },
            data: { resolved: true },
            include: {
                camera: true
            }
        });
        res.json(updatedIncident);
    } catch (error) {
        console.error("Error resolving incident:", error);
        res.status(500).json({ error: "Failed to resolve incident" });
    }
};

export const getCameras = async(req:Request,res:Response) => {
    try{
        const cameras = await prisma.camera.findMany({
        orderBy: {
            createdAt: 'asc'
        }
    });
    res.json(cameras);
    }  
    catch(error) {
        console.error("Error fetching cameras:", error);
        res.status(500).json({ error: "Failed to fetch cameras" });
    }
};