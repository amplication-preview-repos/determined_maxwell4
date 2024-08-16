import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { DriverModule } from "./driver/driver.module";
import { CategoryModule } from "./category/category.module";
import { RoleModule } from "./role/role.module";
import { MenuModule } from "./menu/menu.module";
import { PermissionModule } from "./permission/permission.module";
import { AdminModule } from "./admin/admin.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { OrderModule } from "./order/order.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { TransactionModule } from "./transaction/transaction.module";
import { LocationModule } from "./location/location.module";
import { NotificationModule } from "./notification/notification.module";
import { ReviewModule } from "./review/review.module";
import { PromotionModule } from "./promotion/promotion.module";
import { PaymentModule } from "./payment/payment.module";
import { MenuItemModule } from "./menuItem/menuItem.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CustomerModule,
    DriverModule,
    CategoryModule,
    RoleModule,
    MenuModule,
    PermissionModule,
    AdminModule,
    OrderItemModule,
    RestaurantModule,
    OrderModule,
    VehicleModule,
    TransactionModule,
    LocationModule,
    NotificationModule,
    ReviewModule,
    PromotionModule,
    PaymentModule,
    MenuItemModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
