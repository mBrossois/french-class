<template>
  <div>
    <Header />
    <nuxt />
    <p>Footer</p>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {Header}
}
</script>
