<template>
  <div class="container py-4">
    <h2>Transactions</h2>
    <TransactionTable :transactions="transactions" />
  </div>
</template>

<script>
import TransactionTable from "./TransactionTable.vue";
export default {
  data() {
    return {
      transactions: this.getTransactions(),
    };
  },
  methods: {
    getTransactions() {
      return localStorage.transactions === undefined
        ? null
        : JSON.parse(localStorage.transactions);
    },
  },

  components: { TransactionTable },
};
</script>

<style></style>
