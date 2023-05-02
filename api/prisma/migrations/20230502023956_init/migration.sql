-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "label" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_image_key" ON "Image"("image");
