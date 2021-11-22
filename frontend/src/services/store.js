import Vue from 'vue';
import Vuex from 'vuex';

import APIClient from "@/services/apiClient";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sources: [],
    },
    mutations: {
        resetSources(state, sources) {
            state.sources = sources
        }
    },
    getters: {
        sources(state) {
            return state.sources;
        },
        allSources(state) {
            return Object.values(state.sources);
        }
    },
    actions: {
        getSources({commit}) {
            APIClient.getSources().then((data) => {
                commit('resetSources', data.reduce((acc, source) => {
                    return {[source.UrlName]: source, ...acc}
                }, {}))
            })
        }
    }
});

export default store;