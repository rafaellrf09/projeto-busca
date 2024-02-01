package search

import (
	"os"
	"testing"
)

func TestGoogleSearchRunsOK(t *testing.T) {
	// Set your test API key and search engine ID as environment variables before running the test
	apiKey := "AIzaSyCMtZsUezBCIa8wOBvTXlHmM_fBw8dRSgw"
	cx := "002aaf57fb1d8420c"
	query := "golang"

	// Set environment variables for the test
	os.Setenv("API_KEY", apiKey)
	os.Setenv("SEARCH_ENGINE_ID", cx)

	// Run the function and check if there are no errors
	result, err := googleSearch(query)
	if err != nil {
		t.Error("Error on connect to Google api: " + err.Error())
	}
	if result.TotalResults == "" {
		t.Error("TotalResults is empty")
	}

	if len(result.Results) == 0 {
		t.Error("No search results found")
	}
}
