<template>
    <section class="border-red-500 bg-white-200 min-h-screen flex items-center justify-center">
        <div class="bg-white p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div class="md:w-1/2 px-5">
            <h2 class="text-2xl font-bold text-[#002D74]">Log In</h2>
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
    
              <div class="text-right mt-2">
                <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>
    
              <button @click.prevent="handleLogin" type="submit" class="w-full block bg-blue-600 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6" v-if="!$isUserLoggedIn.value">
                Log In
              </button>
            </form>
    
            <div class="text-sm flex justify-between items-center mt-3">
              <p>Don't have an account?</p>
              <NuxtLink to="/signup" class="py-2 px-5 ml-3 bg-transparent rounded-xl cursor-pointer text-blue-600">Register</NuxtLink>
            </div>
          </div>
          <span class="line md:block hidden w-[1px] bg-[gray] mx-4"></span>

          <div class="w-1/2 h-full md:block hidden mx-2">
            <h2 class="w-full text-4xl px-15 mx-auto text-center leading-100">LOG IN</h2>
          </div>
    
        </div>
      </section>
</template>
  
<script setup>
const { $isUserLoggedIn, $login, $logout } = useNuxtApp()
import axios from "axios";
let passwordError = ref("");
let emailError = ref("");
let email = ref("");
let password = ref("");
let data = ref([]);
// Fetch and format user data
const fetchUserData = async () => {
  try {
    let result = await axios.get("_nuxt/static/data/users.json");
    if (result.status === 200) {
      const data = result.data;
      return data;
    }
     else {
      console.error("Failed to fetch user data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
// Handle form submission
const handleLogin = async (event) => {
  event.preventDefault();
  emailError.value = "";
  passwordError.value = "";

  if (!email.value) {
    emailError.value = "Email is required";
    return;
  }
  if (!password.value) {
    passwordError.value = "Password is required";
    return;
  }

  const users = await fetchUserData();
  if (!users) {
    console.error("No user data available");
    return;
  }

  const user = users.find(user => user.email === email.value && user.password === password.value);
  
  if (user) {
    // Redirect to home page
    await $login();
    await navigateTo("/");
    localStorage.setItem("user", JSON.stringify(user));
    
  } else {
    passwordError.value = "Invalid email or password";
  }
};

</script>
<style scoped>
section {
  background-image: url("/assets/auth/bg.svg");
  font-family: 'Cairo', sans-serif;
}
button {
  cursor: pointer;
}
</style>