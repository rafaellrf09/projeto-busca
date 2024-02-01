package main

import (
	"serarch-bot/internal/api"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	r := gin.Default()
	r.Use(cors.Default())
	api.ApiSearch(r)
	r.Run(":8000")
}
