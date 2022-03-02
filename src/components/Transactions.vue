<template>
  <div class="container">
    <h2>Transactions</h2>
    <table
      v-if="transactions !== null ? true : false"
      class="table table-striped"
    >
      <thead>
        <th>Date</th>
        <th>Remarks</th>
        <th>Amount</th>
      </thead>
      <tr v-for="transaction in transactions" :key="transaction">
        <td>
          <router-link
            :to="{ name: 'Transaction', params: { date: transaction.date } }"
            >{{ transaction.date }}</router-link
          >
        </td>
        <td>{{ transaction.remarks }}</td>
        <td :class="showAmountClass(transaction.type)">
          {{ transaction.amount }}
        </td>
      </tr>
    </table>
    <h3 v-else>No Transactions</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: null,
    };
  },
  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? null
        : JSON.parse(localStorage.transactions);
  },
  methods: {
    showAmountClass(type) {
      let className = "text-light py-2 ";
      if (type === "credit") {
        return className + "bg-success";
      }
      return className + "bg-danger";
    },
  },
};
</script>

<style></style>
