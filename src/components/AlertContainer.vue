<template>
  <transition-group class="alerts" name="alerts" tag="div">
    <div
      :class="['alert', alert.variant]"
      v-for="alert in getAlerts"
      :key="alert.id"
      role="alert"
      aria-atomic="true"
    >
      <svg
        v-if="alert.variant === 'success'"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>Éxito</title>
        <path
          d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>Error</title>
        <path
          d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"
        />
      </svg>
      {{ alert.msg }}
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AlertContainer",
  computed: {
    ...mapGetters(["getAlerts"]),
  },
};
</script>

<style>
.alerts {
  position: fixed;
  z-index: 2;
  bottom: 2rem;
  right: 2rem;
}

.alerts > *:not(:last-child) {
  margin-bottom: 0.5rem;
}

.alert {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--bg-button);
  fill: var(--bg-primary);
  color: var(--bg-primary);
  border-radius: 7px;
  font-size: clamp(0.7rem, 3vw, 0.8rem);
}

.alert > svg {
  height: 1.25rem;
  margin-right: 0.5rem;
}

.alert.error {
  background-color: var(--bg-button-red);
}

.alerts-enter-active,
.alerts-leave-active {
  transition: all 0.2s;
}
.alerts-enter,
.alerts-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>