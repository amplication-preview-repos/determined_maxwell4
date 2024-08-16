/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VehicleService } from "../vehicle.service";
import { VehicleCreateInput } from "./VehicleCreateInput";
import { Vehicle } from "./Vehicle";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";
import { VehicleUpdateInput } from "./VehicleUpdateInput";

export class VehicleControllerBase {
  constructor(protected readonly service: VehicleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vehicle })
  async createVehicle(
    @common.Body() data: VehicleCreateInput
  ): Promise<Vehicle> {
    return await this.service.createVehicle({
      data: data,
      select: {
        color: true,
        createdAt: true,
        driverId: true,
        id: true,
        licensePlate: true,
        model: true,
        registrationYear: true,
        updatedAt: true,
        vehicleId: true,
        vehicleType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Vehicle] })
  @ApiNestedQuery(VehicleFindManyArgs)
  async vehicles(@common.Req() request: Request): Promise<Vehicle[]> {
    const args = plainToClass(VehicleFindManyArgs, request.query);
    return this.service.vehicles({
      ...args,
      select: {
        color: true,
        createdAt: true,
        driverId: true,
        id: true,
        licensePlate: true,
        model: true,
        registrationYear: true,
        updatedAt: true,
        vehicleId: true,
        vehicleType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vehicle(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    const result = await this.service.vehicle({
      where: params,
      select: {
        color: true,
        createdAt: true,
        driverId: true,
        id: true,
        licensePlate: true,
        model: true,
        registrationYear: true,
        updatedAt: true,
        vehicleId: true,
        vehicleType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVehicle(
    @common.Param() params: VehicleWhereUniqueInput,
    @common.Body() data: VehicleUpdateInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.updateVehicle({
        where: params,
        data: data,
        select: {
          color: true,
          createdAt: true,
          driverId: true,
          id: true,
          licensePlate: true,
          model: true,
          registrationYear: true,
          updatedAt: true,
          vehicleId: true,
          vehicleType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVehicle(
    @common.Param() params: VehicleWhereUniqueInput
  ): Promise<Vehicle | null> {
    try {
      return await this.service.deleteVehicle({
        where: params,
        select: {
          color: true,
          createdAt: true,
          driverId: true,
          id: true,
          licensePlate: true,
          model: true,
          registrationYear: true,
          updatedAt: true,
          vehicleId: true,
          vehicleType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}