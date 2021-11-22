package api

import (
	"github.com/gorilla/mux"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"net/http"
	"net/http/httptest"
	"testing"
)

type APIExtraTestSuite struct {
	suite.Suite
	router   *mux.Router
	recorder *httptest.ResponseRecorder
}

func (suite *APIExtraTestSuite) SetupTest() {
	suite.router = CreateApiRouter(mux.NewRouter())
	suite.recorder = httptest.NewRecorder()
}

func (suite *APIExtraTestSuite) TearDownTest() {

}

func TestApiTestSuite(t *testing.T) {
	suite.Run(t, new(APIExtraTestSuite))
}

func (suite *APIExtraTestSuite) TestRoutePingReturnsPong() {
	req, err := http.NewRequest("GET", "/api/ping", nil)
	require.NoError(suite.T(), err)
	suite.router.ServeHTTP(suite.recorder, req)
	assert.Equal(suite.T(), 200, suite.recorder.Code)
	assert.Equal(suite.T(), "pong", suite.recorder.Body.String())
}

func (suite *APIExtraTestSuite) TestGetSourcesListReturnsSingleTestSource() {
	req, err := http.NewRequest("GET", "/api/sources", nil)
	require.NoError(suite.T(), err)
	suite.router.ServeHTTP(suite.recorder, req)
	assert.Equal(suite.T(), 200, suite.recorder.Code)
	assert.Equal(suite.T(), "[{\"ID\":0,\"CreatedAt\":\"0001-01-01T00:00:00Z\",\"UpdatedAt\":\"0001-01-01T00:00:00Z\",\"DeletedAt\":null,\"DummyVar\":0}]", suite.recorder.Body.String())
}
