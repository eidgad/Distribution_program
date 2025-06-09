<template>
  <div>
    <div class="container w-full sm:w-[90%] lg:w-[75%] h-auto mx-auto flex flex-col lg:flex-row justify-center lg:justify-end px-4 py-8 sm:px-6 items-center sm:bg-cover  bg-center bg-no-repeat" style="background-image: url('/assets/vendor.svg');">
      <!-- Text Container -->
      <div class="text-white px-4 sm:px-6 mt-10 sm:mt-16 lg:mt-20 text-center lg:text-right lg:w-150">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
          انضم لقائمة موزعينا المعتمدين
        </h2>
        <p class="text-xs sm:text-base md:text-sm leading-relaxed pb-4">
          إذا كنت مهتمًا بأن تصبح موزعًا معتمدًا لشركة العنكبوت الليبي لتنمية أعمالنا معًا،<br>
          <b>يرجى ملء النموذج التالي </b>وإرساله وسنتصل بك في أقرب وقت ممكن.
        </p>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-80 max-w-md sm:mr-5">
          <button class="flex-1 rounded-lg bg-white text-gray-900 px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors duration-200">
            نموذج التسجيل
          </button>
          <button class="flex-1 rounded-lg bg-white text-gray-900 px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors duration-200">
            الموزعون
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  font-family: "Cairo", sans-serif;
  direction: rtl;
}
button {
  cursor: pointer;
}
</style>
