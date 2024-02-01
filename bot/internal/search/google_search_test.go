package search

import (
	"testing"
)

func TestGoogleSearchRunsOK(t *testing.T) {
	// Set your test API key and search engine ID as environment variables before running the test
	query := "golang"

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
