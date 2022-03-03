<template>
  <div class="container py-4">
    <h2>Dashboard {{ username }}</h2>
    <table class="col-md-2 my-4">
      <tr>
        <td class="px-2">Total Balance</td>
        <td class="px-2">{{ totalBalance }}</td>
      </tr>
    </table>
    <div class="col-md-4 row">
      <div class="col-md-6">
        <button class="btn btn-primary" @click="creditClicked">Credit</button>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary" @click="debitClicked">Debit</button>
      </div>
    </div>
    <TransactionForm :type="type" v-if="buttonClicked" @close="closeForm" />
    <div class="py-4">
      <TransactionTable :transactions="transactions" />
    </div>
  </div>
</template>

<script>
import TransactionForm from "./TransactionForm.vue";
import TransactionTable from "./TransactionTable.vue";
export default {
  components: { TransactionForm, TransactionTable },
  data() {
    return {
      username: localStorage.username,
      totalBalance:
        localStorage.totalBalance === undefined ? 0 : localStorage.totalBalance,
      type: null,
      buttonClicked: false,
      transactions: this.getTransactions(),
    };
  },
  methods: {
    creditClicked() {
      this.type = "credit";
      this.buttonClicked = true;
    },
    debitClicked() {
      this.type = "";
      this.buttonClicked = true;
    },
    closeForm() {
      this.totalBalance = localStorage.totalBalance;
      this.transactions = JSON.parse(localStorage.transactions);
      this.buttonClicked = false;
    },
    getTransactions() {
      return localStorage.transactions === undefined
        ? null
        : JSON.parse(localStorage.transactions);
    },
  },
};
</script>

<style></style>
