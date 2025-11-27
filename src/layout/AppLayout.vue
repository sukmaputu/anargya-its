<template>
  <div>
    <NavbarApp />

    <!-- Routing akan muncul di sini -->
    <router-view></router-view>

    <FooterApp />
  </div>
</template>

<script>
import NavbarApp from "../components/NavbarApp.vue";
import FooterApp from "../components/FooterApp.vue";

export default {
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>
