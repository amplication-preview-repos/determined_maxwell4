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
import { MenuItem } from "./MenuItem";
import { MenuItemCountArgs } from "./MenuItemCountArgs";
import { MenuItemFindManyArgs } from "./MenuItemFindManyArgs";
import { MenuItemFindUniqueArgs } from "./MenuItemFindUniqueArgs";
import { CreateMenuItemArgs } from "./CreateMenuItemArgs";
import { UpdateMenuItemArgs } from "./UpdateMenuItemArgs";
import { DeleteMenuItemArgs } from "./DeleteMenuItemArgs";
import { MenuItemService } from "../menuItem.service";
@graphql.Resolver(() => MenuItem)
export class MenuItemResolverBase {
  constructor(protected readonly service: MenuItemService) {}

  async _menuItemsMeta(
    @graphql.Args() args: MenuItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MenuItem])
  async menuItems(
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.service.menuItems(args);
  }

  @graphql.Query(() => MenuItem, { nullable: true })
  async menuItem(
    @graphql.Args() args: MenuItemFindUniqueArgs
  ): Promise<MenuItem | null> {
    const result = await this.service.menuItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MenuItem)
  async createMenuItem(
    @graphql.Args() args: CreateMenuItemArgs
  ): Promise<MenuItem> {
    return await this.service.createMenuItem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MenuItem)
  async updateMenuItem(
    @graphql.Args() args: UpdateMenuItemArgs
  ): Promise<MenuItem | null> {
    try {
      return await this.service.updateMenuItem({
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

  @graphql.Mutation(() => MenuItem)
  async deleteMenuItem(
    @graphql.Args() args: DeleteMenuItemArgs
  ): Promise<MenuItem | null> {
    try {
      return await this.service.deleteMenuItem(args);
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
