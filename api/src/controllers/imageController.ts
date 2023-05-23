import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get All Images
export const getAllImages = async (request: Request, response: Response) => {
  try {
    const images = await prisma.image.findMany();

    response.json(images);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error getting images" });
  }
};

// Create a New Image
export const createImage = async (request: Request, response: Response) => {
  const lengthLimit = 20;
  const { label, image, id } = request.body;
  const regexCheckImage = /\.(gif|jpg|jpeg|tiff|png)$/i;

  if (label.length >= lengthLimit) {
    return response
      .status(406)
      .json({ message: "The label cannot exceed 20 letters" });
  }

  if (!label || !image || !id) {
    return response
      .status(400)
      .json({ message: "Data are missing to create the image" });
  }

  if (!regexCheckImage.test(image)) {
    return response
      .status(400)
      .json({ message: "The given url is not an image" });
  }

  try {
    await prisma.image.create({
      data: {
        id: id,
        label: label,
        image: image,
      },
    });
    response.json({ message: "Image created successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error at creating the image" });
  }
};

// Delete an image by the id given, param named 'id'
export const deleteImage = async (
  request: Request<ParamsDictionary>,
  response: Response
) => {
  const { id } = request.params;

  if (!id) {
    return response
      .status(400)
      .json({ message: "ID is missing to delete the image" });
  }
  try {
    await prisma.image.delete({
      where: {
        id,
      },
    });
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
};
