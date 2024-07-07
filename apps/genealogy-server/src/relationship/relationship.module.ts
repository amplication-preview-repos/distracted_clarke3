import { Module } from "@nestjs/common";
import { RelationshipModuleBase } from "./base/relationship.module.base";
import { RelationshipService } from "./relationship.service";
import { RelationshipController } from "./relationship.controller";
import { RelationshipResolver } from "./relationship.resolver";

@Module({
  imports: [RelationshipModuleBase],
  controllers: [RelationshipController],
  providers: [RelationshipService, RelationshipResolver],
  exports: [RelationshipService],
})
export class RelationshipModule {}
