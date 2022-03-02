<template>
  <div class="container py-3">
    <h2>Transaction of : {{ $route.params.date }}</h2>
    <table class="table table-striped">
      <thead>
        <th>Amount</th>
        <th>Remarks</th>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction">
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.remarks }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },

  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? []
        : JSON.parse(localStorage.transactions);

    this.transactions = this.transactions.filter(
      (transaction) => transaction.date === this.$route.params.date
    );
  },
};
</script>

<style></style>
