import app from "./app"

const PORT = process.env.PORT || 3000;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Connect to the db at server start
prisma.$connect();


// Disconnect the db at stop's server
app.on('close', () => {
  prisma.$disconnect();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
