package api

import (
	"backend/pkg/sources"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
)

type APIRouter struct {
	mux.Router
}

func CreateApiRouter(router *mux.Router) *mux.Router {
	apiRouter := router.PathPrefix("/api/").Subrouter()
	apiRouter.HandleFunc("/ping", handlePing).Methods("GET")
	apiRouter.HandleFunc("/sources", handleGetSourcesAll).Methods("GET")
	return apiRouter
}

func handlePing(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write([]byte("pong"))
	if err != nil {
		return 
	}
}

func handleGetSourcesAll(w http.ResponseWriter, r *http.Request) {
	var srcs []interface{}
	srcs = append(srcs, sources.DummySource{})
	val, err := json.Marshal(srcs)
	if err != nil {
		return
	}
	_, err = w.Write(val)
	if err != nil {
		return
	}
}