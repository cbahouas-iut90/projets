<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Mot de passe" />
    <button @click="login">Connexion</button>
  </div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return { email: '', password: '' };
  },
  methods: {
    async login() {
      try {
        await AuthService.login({ email: this.email, password: this.password });
        this.$router.push('/home');
      } catch {
        alert('Échec de la connexion');
      }
    },
  },
};
</script>
