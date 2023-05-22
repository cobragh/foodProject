-- CreateTable
CREATE TABLE "Order" (
    "id_order" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order_data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,
    CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id_client") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "product_price" REAL NOT NULL,
    "orderId_order" INTEGER NOT NULL,
    CONSTRAINT "Product_orderId_order_fkey" FOREIGN KEY ("orderId_order") REFERENCES "Order" ("id_order") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Client" (
    "id_client" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL
);
