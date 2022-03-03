<template>
  <div class="container py-4">
    <h2>Credit</h2>
    <form @submit.prevent="creditHandler" class="col-md-4">
      <FormInput v-model="amount" type="text" label="Amount" />
      <FormInput v-model="date" type="date" label="Date" />
      <div class="form-group my-3">
        <label>Remarks</label>
        <textarea v-model="remarks" class="form-control"> </textarea>
      </div>
      <input type="submit" value="Credit" class="btn btn-success" />
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
    };
  },
  methods: {
    creditHandler() {
      let transaction = {
        amount: this.amount,
        date: this.date,
        remarks: this.remarks,
        type: "credit",
      };

      this.transactions.push(transaction);

      localStorage.transactions = JSON.stringify(this.transactions);

      if (localStorage.totalBalance === undefined) {
        localStorage.totalBalance = 0;
      }

      localStorage.totalBalance =
        Number(localStorage.totalBalance) + Number(this.amount);
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
