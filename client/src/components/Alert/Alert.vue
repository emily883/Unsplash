<template>
  <div
    class="toast show bg-light"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header">
      <strong class="me-auto">Error</strong>
      <small>Try again</small>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">{{ message }}</div>
  </div>
</template>
<script>
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  name: "Alert",
  props:{
    message: String
  },
  mounted() {
    //inti toast
    Array.from(document.querySelectorAll(".toast")).forEach(
      (toastNode) => new Toast(toastNode)
    );
  },
};
</script>
