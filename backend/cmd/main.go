package cmd

import (
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func main() {
	r := mux.NewRouter()
	api := r.PathPrefix("/api/").Subrouter()
	api.HandleFunc("/sources", nil).Methods("GET")
	r.PathPrefix("/static").Handler(http.FileServer(http.Dir("dist/")))
	r.PathPrefix("/").HandlerFunc(IndexHandler("dist/index.html"))

	srv := &http.Server{
		Handler: handlers.LoggingHandler(os.Stdout, r),
	}
	log.Fatal(srv.ListenAndServe())
}

func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, entrypoint)
	}
	return http.HandlerFunc(fn)
}
