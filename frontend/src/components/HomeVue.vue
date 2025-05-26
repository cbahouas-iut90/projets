<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return { message: '' };
  },
  async created() {
    try {
      const res = await axios.get('/home');
      this.message = res.data.message;
    } catch {
      this.$router.push('/login');
    }
  },
};
</script>
