<template>
  <v-card width="420" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          label="Username"
          prepend-icon="mdi-account-circle"
        />

        <v-text-field
          v-model="password"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info" @click="onLoginClick({ 'username': username, 'password': password})">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: 'LoginPage',
    data: () => ({
        showPassword: false,
        username: '',
        password: '',
    }),

    
    methods: {
      onLoginClick(data) {
          console.log(data)
      }
    }
}
</script>
