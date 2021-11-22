package main

import (
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func main() {
	r := mux.NewRouter()

	r.PathPrefix("/js").Handler(http.FileServer(http.Dir("dist/")))
	r.PathPrefix("/css").Handler(http.FileServer(http.Dir("dist/")))
	r.Handle("favicon.ico", http.FileServer(http.Dir("dist/")))
	r.PathPrefix("/").HandlerFunc(IndexHandler("dist/index.html"))

	srv := &http.Server{
		Handler: handlers.LoggingHandler(os.Stdout, r),
		Addr: ":8080",
	}
	log.Fatal(srv.ListenAndServe())
}

func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, entrypoint)
	}
	return http.HandlerFunc(fn)
}
