CREATE DATABASE myEStore
go

use myEStore
go

CREATE TABLE Account (
    UserName NVARCHAR(50) PRIMARY KEY,
    Password NVARCHAR(50) NOT NULL,
    FullName NVARCHAR(100),
    Email NVARCHAR(100),
    PhoneNumber NVARCHAR(20),
    Address NVARCHAR(255),
	CreatedAt DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt DATETIME,
	AvatarUrl NVARCHAR(MAX),
    Role NVARCHAR(20) CHECK (Role IN ('admin', 'customer')) NOT NULL
);
go

UPDATE Account
SET AvatarUrl= 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/444485854_1497257464334051_6060291158846955981_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=vkzDPWe53R0Q7kNvgH8LSZ7&_nc_ht=scontent.fsgn2-10.fna&oh=00_AYDEMne8GbK911us_UPqlLrfNB8xEMGmZ02idPNaFp802g&oe=66B25CD3'
WHERE UserName = 'admin'
CREATE TABLE Product (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255),
    Price DECIMAL(18, 2) NOT NULL,
    Stock INT NOT NULL,
    Category NVARCHAR(50),  
);


CREATE TABLE Cart (
    CartID INT PRIMARY KEY IDENTITY(1,1),
    UserName NVARCHAR(50) NOT NULL,
    Status INT CHECK (Status IN (0, 1, 2)) NOT NULL,
    CONSTRAINT FK_Cart_User FOREIGN KEY (UserName) REFERENCES Account(UserName),
);


CREATE TABLE CartItem(
	CartItemID INT PRIMARY KEY IDENTITY(1,1),
	CartID INT NOT NULL,
	ProductID INT NOT NULL,
	Quantity INT NOT NULL,
	Price DECIMAL(18, 2) NOT NULL,
	PurchaseDate DATETIME NULL,
	CONSTRAINT FK_CartItem_Cart FOREIGN KEY (CartID) REFERENCES Cart(CartID),
    CONSTRAINT FK_CartItem_Product FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

CREATE TABLE ProductImage (
    ImageID INT PRIMARY KEY IDENTITY(1,1),
    ProductID INT NOT NULL,
    ImageURL NVARCHAR(255) NOT NULL,
    CONSTRAINT FK_ProductImage_Product FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);


ALTER TABLE Cart
ADD RecipientName NVARCHAR(100),
    Address NVARCHAR(200),
    Phone NVARCHAR(20),
    PaymentMethod NVARCHAR(50);


ALTER TABLE Cart DROP CONSTRAINT FK_Cart_Product;
ALTER TABLE ProductImage DROP CONSTRAINT FK_ProductImage_Product;

ALTER TABLE Cart
DROP CONSTRAINT FK_Cart_Product FOREIGN KEY (ProductID) REFERENCES Product(ProductID);


ALTER TABLE ProductImage
ADD CONSTRAINT FK_ProductImage_Product FOREIGN KEY (ProductID) REFERENCES Product(ProductID);
