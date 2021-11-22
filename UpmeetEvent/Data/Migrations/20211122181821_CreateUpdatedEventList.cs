using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UpmeetEvent.Data.Migrations
{
    public partial class CreateUpdatedEventList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "eventFavorites");

            migrationBuilder.DropColumn(
                name: "EventDate",
                table: "eventFavorites");

            migrationBuilder.DropColumn(
                name: "EventTitle",
                table: "eventFavorites");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "eventFavorites");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "eventFavorites",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "eventFavorites",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "allEvents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    Labels = table.Column<string>(nullable: true),
                    EventDate = table.Column<DateTime>(nullable: false),
                    Location = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_allEvents", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_eventFavorites_ApplicationUserId",
                table: "eventFavorites",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_eventFavorites_EventId",
                table: "eventFavorites",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_eventFavorites_AspNetUsers_ApplicationUserId",
                table: "eventFavorites",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_eventFavorites_allEvents_EventId",
                table: "eventFavorites",
                column: "EventId",
                principalTable: "allEvents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_eventFavorites_AspNetUsers_ApplicationUserId",
                table: "eventFavorites");

            migrationBuilder.DropForeignKey(
                name: "FK_eventFavorites_allEvents_EventId",
                table: "eventFavorites");

            migrationBuilder.DropTable(
                name: "allEvents");

            migrationBuilder.DropIndex(
                name: "IX_eventFavorites_ApplicationUserId",
                table: "eventFavorites");

            migrationBuilder.DropIndex(
                name: "IX_eventFavorites_EventId",
                table: "eventFavorites");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "eventFavorites");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "eventFavorites");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "eventFavorites",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EventDate",
                table: "eventFavorites",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "EventTitle",
                table: "eventFavorites",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "eventFavorites",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
