<template>
  <div class="container">
    <h2>Transactions</h2>
    <table>
      <tr>
        <th>Date</th>
      </tr>
      <tr v-for="transaction in transactionDate" :key="transaction">
        <router-link
          :to="{ name: 'Transaction', params: { date: transaction } }"
          >{{ transaction }}</router-link
        >
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
      transactionDate: [],
    };
  },
  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? []
        : JSON.parse(localStorage.transactions);

    this.transactionDate = [
      ...new Set(
        JSON.parse(localStorage.transactions).map((item) => item.date)
      ),
    ];
  },
};
</script>

<style></style>
