var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/home","pathMatch":"full"},{"path":"home","component":"HomeComponent"},{"path":"items","loadChildren":"./items/items.module#ItemsModule","children":[{"kind":"module","children":[{"name":"itemsRoutes","filename":"src/app/items/items-routing.module.ts","module":"ItemsRoutingModule","children":[{"path":"","redirectTo":"/items/list","pathMatch":"full"},{"path":"list","component":"ListItemsComponent"},{"path":"add","component":"AddItemComponent"}],"kind":"module"}],"module":"ItemsModule"}]}],"kind":"module"}]}