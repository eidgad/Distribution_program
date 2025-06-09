<template>
  <div
    class="flex flex-wrap justify-between items-center bg-white py-4 px-6 md:px-10 shadow-md"
  >
    <!-- Logo and Language Switcher -->
    <div class="flex items-center gap-4 flex-wrap">
      <NuxtLink to="/" class="logo font-bold text-2xl md:text-4xl cursor-pointer">
        <img class="w-12 h-12" src="/assets/logo.png" />
      </NuxtLink>
      <div class="flex items-center">
        <span class="bg-[#D9D9D9] w-3 h-3 md:w-4 md:h-4 rounded-full"></span>
        <span class="lang-switcher py-1 px-2 text-sm md:py-2 md:px-4 rounded-full cursor-pointer">EN</span>
      </div>
    </div>

    <!-- Hamburger Menu Button for Tablet and Mobile -->
    <button
      class="block md:hidden flex flex-col gap-1 items-center"
      @click="toggleMenu"
    >
      <span class="block w-6 h-0.5 bg-[#2B1F51]"></span>
      <span class="block w-6 h-0.5 bg-[#2B1F51]"></span>
      <span class="block w-6 h-0.5 bg-[#2B1F51]"></span>
    </button>

    <!-- Navigation Links -->
    <nav
      :class="['w-full md:w-auto', menuOpen ? 'block' : 'hidden', 'md:block']"
    >
      <ul class="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:justify-end">
        <li><a href="#" class="text-sm md:text-base">Demos</a></li>
        <li><a href="#" class="text-sm md:text-base">Hosting</a></li>
        <li><a href="#" class="text-sm md:text-base">ProHosting</a></li>
        <li><a href="#" class="text-sm md:text-base">Domains</a></li>
        <li><a href="#" class="text-sm md:text-base">Need Help?</a></li>
        <li><a href="#" class="text-sm md:text-base">Pages</a></li>
        <li><a href="#help" class="text-sm md:text-base">Contact Us</a></li>

        <!-- Toggle Login/Logout Button -->

        <li
          v-if="!$isUserLoggedIn.value"
          class="text-white bg-[#2B1F51] w-full md:w-40 p-2 text-center rounded-lg cursor-pointer"
        >
          <NuxtLink to="/login" class="text-sm md:text-base">
            Client Login
            <svg
              class="inline"
              width="16"
              height="16"
              md:width="18"
              md:height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18V16H16V2H9V0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H9ZM7 14L5.625 12.55L8.175 10H0V8H8.175L5.625 5.45L7 4L12 9L7 14Z"
                fill="white"
              />
            </svg>
          </NuxtLink>
        </li>
        <li
          else="$isUserLoggedIn.value"
          class="text-white bg-[#2B1F51] w-full md:w-40 p-2 text-center rounded-lg cursor-pointer"
          @click="handleLogout"
        >
          <span class="text-sm md:text-base">Client Logout</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const { $logout } = useNuxtApp();
let menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

const handleLogout = () => {
  $logout();
  localStorage.removeItem("user");
};

</script>

<style scoped></style>
