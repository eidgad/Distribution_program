<template>
  <div class="container flex flex-col lg:flex-row mx-auto px-6 lg:px-20 py-10 lg:py-20">
    <div class="text w-full lg:w-1/2">
      <h2 class="text-[#2B1F51] text-lg lg:text-xl px-4 lg:px-15 py-2 lg:py-4">
        ابدأ بسرعة مع تطبيقات بنقرة واحدة
      </h2>
      <p class="px-4 lg:px-15 text-[gray] text-sm lg:text-base">
        يدعم Kubernetes Engine التكامل مع أدوات Kubernetes المشهورة، مما يتيح لك
        إنشاء مجموعات تعمل على تشغيل برامج مفتوحة المصدر مكوّنة مسبقًا بنقرة
        واحدة.
      </p>
      <div class="spans px-4 lg:px-15 py-4 lg:py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 text-xs lg:text-sm">
        <span>
          <span class="border px-2 rounded-full text-[#345BE4] text-xs">✓</span>&nbsp;
          Helm Charts
        </span>
        <span>
          <span class="border px-2 rounded-full text-[#345BE4] text-xs">✓</span>&nbsp;
          Cert Manager
        </span>
        <span>
          <span class="border px-2 rounded-full text-[#345BE4] text-xs">✓</span>&nbsp;
          Linkerd
        </span>
        <span>
          <span class="border px-2 rounded-full text-[#345BE4] text-xs">✓</span>&nbsp;
          Operators
        </span>
      </div>
    </div>
    <div class="img w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
      <img src="/assets/arrow.png" class="max-w-full h-auto" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
  * {
    font-family: "Cairo", sans-serif;
    direction: rtl;
  }
</style>
