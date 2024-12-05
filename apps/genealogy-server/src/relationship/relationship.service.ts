import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RelationshipServiceBase } from "./base/relationship.service.base";

@Injectable()
export class RelationshipService extends RelationshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
