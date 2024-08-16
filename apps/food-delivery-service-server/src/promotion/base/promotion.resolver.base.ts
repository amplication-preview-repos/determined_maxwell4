/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Promotion } from "./Promotion";
import { PromotionCountArgs } from "./PromotionCountArgs";
import { PromotionFindManyArgs } from "./PromotionFindManyArgs";
import { PromotionFindUniqueArgs } from "./PromotionFindUniqueArgs";
import { CreatePromotionArgs } from "./CreatePromotionArgs";
import { UpdatePromotionArgs } from "./UpdatePromotionArgs";
import { DeletePromotionArgs } from "./DeletePromotionArgs";
import { PromotionService } from "../promotion.service";
@graphql.Resolver(() => Promotion)
export class PromotionResolverBase {
  constructor(protected readonly service: PromotionService) {}

  async _promotionsMeta(
    @graphql.Args() args: PromotionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Promotion])
  async promotions(
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.service.promotions(args);
  }

  @graphql.Query(() => Promotion, { nullable: true })
  async promotion(
    @graphql.Args() args: PromotionFindUniqueArgs
  ): Promise<Promotion | null> {
    const result = await this.service.promotion(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Promotion)
  async createPromotion(
    @graphql.Args() args: CreatePromotionArgs
  ): Promise<Promotion> {
    return await this.service.createPromotion({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Promotion)
  async updatePromotion(
    @graphql.Args() args: UpdatePromotionArgs
  ): Promise<Promotion | null> {
    try {
      return await this.service.updatePromotion({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Promotion)
  async deletePromotion(
    @graphql.Args() args: DeletePromotionArgs
  ): Promise<Promotion | null> {
    try {
      return await this.service.deletePromotion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}