package search

import (
	"context"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"google.golang.org/api/customsearch/v1"
	"google.golang.org/api/option"
)

type ResultItem struct {
	// Link: The full URL to which the search result is pointing, e.g.
	// http://www.example.com/foo/bar.
	Link string `json:"link,omitempty"`

	// Title: The title of the search result, in plain text.
	Title string `json:"title,omitempty"`
}

type Result struct {
	TotalResults string       `json:"totalResults,omitempty"`
	Results      []ResultItem `json:"results,omitempty"`
}

func googleSearch(query string) (Result, error) {
	ctx := context.Background()
	svc, err := customsearch.NewService(ctx, option.WithAPIKey("AIzaSyCMtZsUezBCIa8wOBvTXlHmM_fBw8dRSgw"))
	if err != nil {
		log.Fatalf("Unable to create Custom Search service: %v", err)
		return Result{}, err
	}

	var resultItems []ResultItem
	start := int64(1)
	var totalResults string

	for start < 40 {
		call := svc.Cse.List().Cx("002aaf57fb1d8420c").Q(query).Gl("br").Start(start)
		response, err := call.Do()
		if err != nil {
			log.Fatalf("Error making search request: %v", err)
		}

		totalResults = response.SearchInformation.TotalResults

		for _, item := range response.Items {
			var result ResultItem
			result.Title = item.Title
			result.Link = item.Link
			resultItems = append(resultItems, result)
		}

		start += 10
	}

	result := Result{
		TotalResults: totalResults,
		Results:      resultItems,
	}

	return result, nil
}

func Search(c *gin.Context) {
	query := c.Param("query")

	results, err := googleSearch(query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
	}
	c.JSON(http.StatusOK, results)
}
