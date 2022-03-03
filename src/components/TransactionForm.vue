<template>
  <form @submit.prevent="formSubmit" class="col-md-4">
    <FormInput label="Amount" type="text" v-model="amount" />
    <FormInput label="Date" type="date" v-model="date" />
    <div class="form-group my-4">
      <label>Remarks</label>
      <textarea v-model="remarks" class="form-control"></textarea>
    </div>
    <p class="text-danger" v-if="debitError">{{ debitErrorMessage }}</p>
    <input
      type="submit"
      value="Credit"
      :class="submitClass"
      v-if="checkCredit"
    />
    <input type="submit" value="Debit" :class="submitClass" v-else />
  </form>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
  name: "TransactionForm",
  components: { FormInput },
  props: ["type"],
  data() {
    return {
      amount: "",
      date: "",
      remarks: "",
      submitClass: "btn btn-success",
      transactions: null,
      debitErrorMessage: "",
      debitError: false,
    };
  },
  methods: {
    formSubmit() {
      let transaction = {
        amount: this.amount,
        date: this.date,
        remarks: this.remarks,
        type: null,
      };
      if (this.type === "credit") {
        transaction.type = "credit";
        this.creditHandler(transaction);
      } else {
        transaction.type = "debit";
        this.debitHandler(transaction);
      }
    },

    creditHandler(transaction) {
      this.transactions.push(transaction);

      localStorage.transactions = JSON.stringify(this.transactions);

      if (localStorage.totalBalance === undefined) {
        localStorage.totalBalance = 0;
      }

      localStorage.totalBalance =
        Number(localStorage.totalBalance) + Number(this.amount);
      this.$emit("close");
    },
    debitHandler(transaction) {
      if (this.amount > Number(localStorage.totalBalance)) {
        this.debitErrorMessage = "Insufficient Balance in account";
        this.debitError = true;
        return;
      }

      this.transactions.push(transaction);

      localStorage.transactions = JSON.stringify(this.transactions);

      if (localStorage.totalBalance === undefined) {
        localStorage.totalBalance = 0;
      }

      localStorage.totalBalance =
        Number(localStorage.totalBalance) - Number(this.amount);
      this.$emit("close");
    },
    loadCondition() {
      this.amount = "";
      this.date = "";
      this.remarks = "";
      this.debitError = false;
    },
  },
  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? []
        : JSON.parse(localStorage.transactions);
  },
  computed: {
    checkCredit() {
      if (this.type === "credit") {
        this.loadCondition();
        return true;
      } else {
        this.loadCondition();
        return false;
      }
    },
  },
};
</script>

<style></style>
