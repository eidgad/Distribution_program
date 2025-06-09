<template>
  <div
    class="advantages w-full min-h-[250vh] sm:min-h-screen mx-auto flex flex-col justify-start items-center relative bg-[#fcfcfc] py-8 md:mb-20"
  >

    <!-- Title -->
    <h1
      class="relative top-20 z-10 font-bold text-[#2B1F51] text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-8 md:mb-16 px-4 pt-40"
    >
      ما الذي يميز
    </h1>

    <!-- Cards Grid -->
    <div
      class="cards relative z-10 top-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card shadow-lg rounded-lg bg-[#FFFFFF] p-4 sm:p-5 lg:p-6 text-right hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          :src="card.icon"
          class="w-8 h-8 sm:w-20 sm:h-20 mb-3"
          :alt="card.alt"
        />
        <h3 class="text-sm sm:text-md lg:text-lg font-bold py-2 leading-tight">
          {{ card.title }}
        </h3>
        <p
          class="text-xs sm:text-sm text-gray-600 py-2 sm:py-4 leading-relaxed"
        >
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    icon: "_nuxt/assets/icons/security-icon.svg",
    alt: "Security Icon",
    title: "الحماية من عمليّات الاختراق والبرامج الخبيثة",
    description:
      "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
  },
  {
    icon: "_nuxt/assets/icons/performance-icon.svg",
    alt: "Performance Icon",
    title: "التخفيف من هجمات DDoS",
    description:
      "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.",
  },
  {
    icon: "_nuxt/assets/icons/gear-icon.svg",
    alt: "Gear Icon",
    title: "تحسين أداء الموقع عبر CDN",
    description:
      "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط لتحسين أداء موقعك.",
  },
  {
    icon: "_nuxt/assets/icons/growth-icon.svg",
    alt: "Growth Icon",
    title: "زيادة نمو الأعمال",
    description:
      "قم بتحسين تجربة المستخدم وزيادة سرعة الموقع لتحفيز نمو الأعمال وزيادة الإيرادات.",
  },
  {
    icon: "_nuxt/assets/icons/ease-to-use-icon.svg",
    alt: "Ease of Use Icon",
    title: "سهولة الاستخدام",
    description:
      "نحن نقدم واجهة سهلة الاستخدام لتكوين وإدارة ميزات الأمان والأداء بسرعة.",
  },
  {
    icon: "_nuxt/assets/icons/visitors-icon.svg",
    alt: "Visitors Icon",
    title: "تحليل الزوار",
    description:
      "احصل على رؤى دقيقة حول زوار موقعك لتحسين استراتيجيات التسويق.",
  },
];
</script>

<style scoped>
  * {
    direction: rtl;
    font-family: "cairo", sans-serif;
  }
  .advantages {
    background-image: url("/assets/plan.svg");
    background-repeat: no-repeat;
  }
</style>
