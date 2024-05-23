import { createStore } from "vuex";

export default createStore({
  state: {
    selectedProductId: null,
  },
    mutations: {
        setSelectedProductId(state, productId) {
            state.selectedProductId = productId;
        },
    },
});
