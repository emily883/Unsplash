import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get All Images
export const getAllImages = async (req: Request, res: Response) => {
  try {
    const images = await prisma.image.findMany();
    res.json(images);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting images" });
  }
};

// Crear una nueva imagen
export const createImage = async (req: Request, res: Response) => {
  const { label, image, id } = req.body;
  if (!label || !image || !id) {
    return res
      .status(400)
      .json({ message: "Data are missing to create the image" });
  }

  try {
    await prisma.image.create({
      data: {
        id: id,
        label: label,
        image: image,
      },
    });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear imagen" });
  }
};
