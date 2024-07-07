/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Relationship as PrismaRelationship } from "@prisma/client";

export class RelationshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RelationshipCountArgs, "select">
  ): Promise<number> {
    return this.prisma.relationship.count(args);
  }

  async relationships(
    args: Prisma.RelationshipFindManyArgs
  ): Promise<PrismaRelationship[]> {
    return this.prisma.relationship.findMany(args);
  }
  async relationship(
    args: Prisma.RelationshipFindUniqueArgs
  ): Promise<PrismaRelationship | null> {
    return this.prisma.relationship.findUnique(args);
  }
  async createRelationship(
    args: Prisma.RelationshipCreateArgs
  ): Promise<PrismaRelationship> {
    return this.prisma.relationship.create(args);
  }
  async updateRelationship(
    args: Prisma.RelationshipUpdateArgs
  ): Promise<PrismaRelationship> {
    return this.prisma.relationship.update(args);
  }
  async deleteRelationship(
    args: Prisma.RelationshipDeleteArgs
  ): Promise<PrismaRelationship> {
    return this.prisma.relationship.delete(args);
  }
}