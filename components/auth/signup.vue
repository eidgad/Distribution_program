<template>
  <section class="border-red-500 bg-white-200 min-h-screen flex items-center justify-center">
    <div class="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div class="md:w-1/2 px-5">
        <h2 class="text-2xl font-bold text-[#002D74]">Sign Up</h2>
        <form class="mt-6">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              v-model="email" 
              placeholder="Enter Email Address" 
              class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
              autofocus 
              autocomplete 
              required
            >
            <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input 
              type="password" 
              v-model="password" 
              placeholder="Enter Password" 
              minlength="6" 
              class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
              required
            >
            <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Repeat Password</label>
            <input 
              type="password" 
              v-model="repeatPassword" 
              placeholder="Repeat Password" 
              minlength="6" 
              class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" 
              required
            >
            <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
          </div>

          <button @click.prevent="handleSignup" type="submit" class="w-full block bg-blue-600 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
            Sign Up
          </button>
        </form>
     </div>
      <span class="line md:block hidden w-[1px] bg-[gray] mx-4"></span>

      <div class="w-1/2 h-full md:block hidden mx-2">
        <h2 class="w-full text-4xl px-12 mx-auto text-center leading-100">SIGN UP</h2>
      </div>

    </div>
  </section>
</template>
  
<script setup>
import { ref } from "vue";
import axios from "axios";

let passwordError = ref("");
let emailError = ref("");
let email = ref("");
let password = ref("");
let repeatPassword = ref("");
const { $isUserLoggedIn } = useNuxtApp();

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleSignup = async () => {
  emailError.value = "";
  passwordError.value = "";

  if (!validateEmail(email.value)) {
    emailError.value = "Invalid email address";
    return;
  }
  if (password.value !== repeatPassword.value) {
    passwordError.value = "Passwords do not match";
    return;
  }
  if ($isUserLoggedIn.value) {
    emailError.value = "You are already logged in";
    return;
  }

  try {
    // Check if the email exists in the users.json file
    const usersResponse = await axios.get("_nuxt/static/data/users.json");
    const users = usersResponse.data;

    const userExists = users.some((user) => user.email === email.value);
    if (userExists) {
      emailError.value = "This user already has an account";
      return;
    }

    // Add the new user to the users.json file
    const newUser = { email: email.value, password: password.value };
    users.push(newUser);

    await axios.post("_nuxt/static/data/save-users", users); // Assuming you have an endpoint to save the updated users list

    alert("Signup successful!");
  } catch (error) {
    console.error("Error during signup:", error);
    emailError.value = "An error occurred during signup";
  }
};
</script>
  
<style scoped>
section {
  font-family: "cairo", sans-serif;
}
button {
  cursor: pointer;
}
</style>
