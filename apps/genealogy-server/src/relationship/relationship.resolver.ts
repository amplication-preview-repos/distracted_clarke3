import * as graphql from "@nestjs/graphql";
import { RelationshipResolverBase } from "./base/relationship.resolver.base";
import { Relationship } from "./base/Relationship";
import { RelationshipService } from "./relationship.service";

@graphql.Resolver(() => Relationship)
export class RelationshipResolver extends RelationshipResolverBase {
  constructor(protected readonly service: RelationshipService) {
    super(service);
  }
}
