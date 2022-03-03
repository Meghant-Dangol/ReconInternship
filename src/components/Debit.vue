<template>
  <div class="container py-4">
    <h2>Debit</h2>
    <form @submit.prevent="debitHandler" class="col-md-4">
      <FormInput v-model="amount" type="text" label="Amount" />
      <FormInput v-model="date" type="date" label="Date" />
      <div class="form-group my-3">
        <label>Remarks</label>
        <textarea v-model="remarks" class="form-control"> </textarea>
      </div>
      <p class="text-danger" v-if="debitError">{{ debitErrorMessage }}</p>
      <input type="submit" value="Debit" class="btn btn-success" />
    </form>
  </div>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
  components: { FormInput },
  data() {
    return {
      amount: "",
      date: "",
      remarks: "",
      transactions: [],
      debitError: false,
      debitErrorMessage: "",
    };
  },
  methods: {
    debitHandler() {
      let transaction = {
        amount: this.amount,
        date: this.date,
        remarks: this.remarks,
        type: "debit",
      };

      if (localStorage.totalBalance === undefined) {
        localStorage.totalBalance = 0;
      }
      if (Number(this.amount) > Number(localStorage.totalBalance)) {
        this.debitErrorMessage = "Not Enough Balance";
        this.debitError = true;
        return;
      }
      this.transactions.push(transaction);

      localStorage.transactions = JSON.stringify(this.transactions);

      localStorage.totalBalance =
        Number(localStorage.totalBalance) - Number(this.amount);

      this.$router.push("/dashboard");
    },
  },
  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? []
        : JSON.parse(localStorage.transactions);
  },
};
</script>

<style></style>
