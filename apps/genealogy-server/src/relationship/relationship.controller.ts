import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RelationshipService } from "./relationship.service";
import { RelationshipControllerBase } from "./base/relationship.controller.base";

@swagger.ApiTags("relationships")
@common.Controller("relationships")
export class RelationshipController extends RelationshipControllerBase {
  constructor(protected readonly service: RelationshipService) {
    super(service);
  }
}
