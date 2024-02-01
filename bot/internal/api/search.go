package api

import (
	"serarch-bot/internal/search"

	"github.com/gin-gonic/gin"
)

func ApiSearch(r *gin.Engine) {
	r.GET("/search/:query", search.Search)
}
