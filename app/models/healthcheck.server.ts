import { prisma } from "app/db.server";

export async function dbHealthCheck() {
  return await prisma.healthCheck.findFirst({
    where: {
      message: "OK",
    },
  });
}
