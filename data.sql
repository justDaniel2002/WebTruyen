USE [master]
GO
/****** Object:  Database [webtruyen]    Script Date: 5/13/2024 1:27:00 PM ******/
CREATE DATABASE [webtruyen]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'webtruyen', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\webtruyen.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'webtruyen_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\webtruyen_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [webtruyen] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [webtruyen].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [webtruyen] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [webtruyen] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [webtruyen] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [webtruyen] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [webtruyen] SET ARITHABORT OFF 
GO
ALTER DATABASE [webtruyen] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [webtruyen] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [webtruyen] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [webtruyen] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [webtruyen] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [webtruyen] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [webtruyen] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [webtruyen] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [webtruyen] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [webtruyen] SET  DISABLE_BROKER 
GO
ALTER DATABASE [webtruyen] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [webtruyen] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [webtruyen] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [webtruyen] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [webtruyen] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [webtruyen] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [webtruyen] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [webtruyen] SET RECOVERY FULL 
GO
ALTER DATABASE [webtruyen] SET  MULTI_USER 
GO
ALTER DATABASE [webtruyen] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [webtruyen] SET DB_CHAINING OFF 
GO
ALTER DATABASE [webtruyen] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [webtruyen] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [webtruyen] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [webtruyen] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'webtruyen', N'ON'
GO
ALTER DATABASE [webtruyen] SET QUERY_STORE = OFF
GO
USE [webtruyen]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[createdDate] [datetime] NOT NULL,
	[modifiedDate] [datetime] NOT NULL,
	[phone] [nvarchar](50) NULL,
	[address] [nvarchar](max) NULL,
	[isActive] [bit] NOT NULL,
	[token] [nvarchar](max) NULL,
	[roleID] [int] NOT NULL,
	[expireTime] [datetime] NULL,
	[accountBalance] [decimal](18, 0) NULL,
	[isDelete] [bit] NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AccountChaper]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountChaper](
	[accountID] [bigint] NOT NULL,
	[chapterID] [bigint] NOT NULL,
 CONSTRAINT [PK_AccountChaper] PRIMARY KEY CLUSTERED 
(
	[accountID] ASC,
	[chapterID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[isActive] [bit] NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Chaper]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Chaper](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[content] [ntext] NOT NULL,
	[storyID] [bigint] NOT NULL,
	[order] [bigint] NOT NULL,
	[status] [bit] NOT NULL,
 CONSTRAINT [PK_Chaper] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[History]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[History](
	[userID] [bigint] NOT NULL,
	[storyID] [bigint] NOT NULL,
 CONSTRAINT [PK_History] PRIMARY KEY CLUSTERED 
(
	[userID] ASC,
	[storyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Review]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Review](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[content] [nvarchar](max) NOT NULL,
	[userID] [bigint] NOT NULL,
	[createdDate] [datetime] NOT NULL,
	[storyID] [bigint] NOT NULL,
 CONSTRAINT [PK_Review] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Story]    Script Date: 5/13/2024 1:27:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Story](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](max) NOT NULL,
	[description] [nvarchar](max) NULL,
	[author] [nvarchar](max) NULL,
	[categoryID] [bigint] NOT NULL,
	[isActive] [bit] NULL,
	[totalReview] [bigint] NULL,
	[numOfPeopleReview] [bigint] NULL,
	[status] [nvarchar](max) NULL,
	[createdDate] [datetime] NOT NULL,
	[modifiedDate] [datetime] NOT NULL,
	[image] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Story] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([id], [email], [password], [createdDate], [modifiedDate], [phone], [address], [isActive], [token], [roleID], [expireTime], [accountBalance], [isDelete]) VALUES (2, N'kienbeo237@gmail.com', N'123456', CAST(N'2024-05-13T06:23:36.930' AS DateTime), CAST(N'2024-05-13T06:23:36.930' AS DateTime), NULL, NULL, 1, NULL, 1, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Account] OFF
GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (1, N'Tiên Hiệp', 1)
INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (2, N'Kiếm Hiệp', 1)
INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (3, N'Truyện Teen', 1)
INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (4, N'Ngôn Tình', 1)
INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (5, N'Đam Mỹ', 1)
INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (6, N'Quan Trường', 1)
INSERT [dbo].[Category] ([id], [name], [isActive]) VALUES (7, N'Thám Hiểm', 1)
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([id], [name]) VALUES (1, N'USER')
INSERT [dbo].[Role] ([id], [name]) VALUES (2, N'ADMIN')
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD  CONSTRAINT [FK_Account_Role] FOREIGN KEY([roleID])
REFERENCES [dbo].[Role] ([id])
GO
ALTER TABLE [dbo].[Account] CHECK CONSTRAINT [FK_Account_Role]
GO
ALTER TABLE [dbo].[AccountChaper]  WITH CHECK ADD  CONSTRAINT [FK_AccountChaper_Account] FOREIGN KEY([accountID])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[AccountChaper] CHECK CONSTRAINT [FK_AccountChaper_Account]
GO
ALTER TABLE [dbo].[AccountChaper]  WITH CHECK ADD  CONSTRAINT [FK_AccountChaper_Chaper] FOREIGN KEY([chapterID])
REFERENCES [dbo].[Chaper] ([id])
GO
ALTER TABLE [dbo].[AccountChaper] CHECK CONSTRAINT [FK_AccountChaper_Chaper]
GO
ALTER TABLE [dbo].[Chaper]  WITH CHECK ADD  CONSTRAINT [FK_Chaper_Story] FOREIGN KEY([storyID])
REFERENCES [dbo].[Story] ([id])
GO
ALTER TABLE [dbo].[Chaper] CHECK CONSTRAINT [FK_Chaper_Story]
GO
ALTER TABLE [dbo].[History]  WITH CHECK ADD  CONSTRAINT [FK_History_Account] FOREIGN KEY([userID])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[History] CHECK CONSTRAINT [FK_History_Account]
GO
ALTER TABLE [dbo].[History]  WITH CHECK ADD  CONSTRAINT [FK_History_Story] FOREIGN KEY([storyID])
REFERENCES [dbo].[Story] ([id])
GO
ALTER TABLE [dbo].[History] CHECK CONSTRAINT [FK_History_Story]
GO
ALTER TABLE [dbo].[Review]  WITH CHECK ADD  CONSTRAINT [FK_Review_Account] FOREIGN KEY([userID])
REFERENCES [dbo].[Account] ([id])
GO
ALTER TABLE [dbo].[Review] CHECK CONSTRAINT [FK_Review_Account]
GO
ALTER TABLE [dbo].[Review]  WITH CHECK ADD  CONSTRAINT [FK_Review_Story] FOREIGN KEY([storyID])
REFERENCES [dbo].[Story] ([id])
GO
ALTER TABLE [dbo].[Review] CHECK CONSTRAINT [FK_Review_Story]
GO
ALTER TABLE [dbo].[Story]  WITH CHECK ADD  CONSTRAINT [FK_Story_Category] FOREIGN KEY([categoryID])
REFERENCES [dbo].[Category] ([id])
GO
ALTER TABLE [dbo].[Story] CHECK CONSTRAINT [FK_Story_Category]
GO
USE [master]
GO
ALTER DATABASE [webtruyen] SET  READ_WRITE 
GO
