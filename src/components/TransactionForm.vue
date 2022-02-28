<template>
  <div class="container">
    <h1>{{ $route.params.mode }}</h1>
    <form class="col-md-3" @submit.stop.prevent="formSubmitHandler">
      <div class="form-group my-4">
        <label for="date" class="form-label">Date</label>
        <input type="date" v-model="date" class="form-control" />
      </div>
      <div class="form-group my-4">
        <label for="amount" class="form-label">Amount</label>
        <input type="text" v-model="amount" class="form-control" />
      </div>
      <div class="form-group my-4">
        <label for="remarks" class="form-label">Remarks</label>
        <textarea v-model="remarks" class="form-control"> </textarea>
      </div>
      <input type="submit" :value="mode" class="btn btn-success mt-3" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      amount: "",
      remarks: "",
      transactions: [],
      mode: this.$route.name,
    };
  },
  methods: {
    formSubmitHandler() {
      if (this.$route.name === "Credit") {
        let transaction = {
          date: this.date,
          amount: this.amount,
          remarks: this.remarks,
        };
        this.transactions.push(transaction);
        localStorage.totalBalance =
          Number(localStorage.totalBalance) + Number(this.amount);
        localStorage.transaction = JSON.stringify(this.transactions);

        this.$router.push("Transaction");
      } else {
        let transaction = {
          date: this.date,
          amount: this.amount,
          remarks: this.remarks,
        };
        this.transactions.push(transaction);
        localStorage.totalBalance =
          Number(localStorage.totalBalance) - Number(this.amount);
        localStorage.transaction = JSON.stringify(this.transactions);
        this.$router.push("Transaction");
      }
    },
  },
  updated() {
    this.mode = this.$route.name;
  },
};
</script>

<style></style>
