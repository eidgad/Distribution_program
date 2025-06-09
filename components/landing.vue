<template>
  <div class="relative w-full h-full min-h-[150vh]">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/assets/landing.svg"
        alt="Background"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content Container -->
    <div
      class="relative z-10 flex flex-col items-center justify-flex-start min-h-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
    >
      <!-- Hero Content -->
      <div class="text-center text-white max-w-4xl mx-auto">
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semi-bold mb-4 sm:mb-6 lg:mb-8"
        >
          الاستضافات المشتركة
        </h1>
        <p
          class="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12"
        >
          كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و
          وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة
        </p>
      </div>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md mx-auto"
      >
        <NuxtLink
          to="#plans"
          class="flex-1 rounded-lg text-white bg-transparent border border-white px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer text-center"
        >
          عرض الاسعار
        </NuxtLink>
        <NuxtLink
        v-show="!$isUserLoggedIn.value"
          to="/signup"
          class="flex-1 rounded-lg bg-white text-gray-900 px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer text-center"
        >
          إنشاء حساب
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  * {
    direction: rtl;
    font-family: "cairo", sans-serif;
  }
</style>
