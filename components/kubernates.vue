<template>
  <div class="parent">
    <div class="container mx-auto px-4 py-8 w-full md:w-[80%]">
      <!-- Header Section -->
      <div class="first text-center mb-8 p-5">
        <h1 class="text-3xl sm:text-3xl mb-6">
          مجموعات <b>Kubernetes</b> في غضون دقائق فقط
        </h1>
        <p class="mb-4 text-sm sm:text-sm mx-auto max-w-200 text-[gray]">
          توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام
          Kubernetes Engine المُدار بالكامل، يمكنك بسهولة إطلاق وإدارة وضبط
          موارد تطبيقاتك في الحاويات في دقائق بدلاً من أيام.
        </p>
        <button
          class="btn rounded-xl border-2 border-[#092346] text-[#092346] py-2 px-6 sm:px-10 hover:bg-[#092346] hover:text-white transition duration-300"
        >
          إطلب الآن!
        </button>
      </div>

      <!-- Cards Section -->
      <div class="text-center mb-8">
        <h1 class="text-3xl sm:text-4xl  mb-6">
          انطلق أسرع وسارع في نموّ عملك
        </h1>
        <div
          class="cards my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="card shadow-lg rounded-lg bg-[#FFFFFF] p-5 text-right hover:shadow-xl transition-shadow duration-300"
          >
            <img :src="card.dir" />
            <h3 class="text-lg font-bold py-2">
              {{ card.title }}
            </h3>
            <p class="text-md text-gray-600 py-4">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cards = [
    {
      dir: "/assets/kuber-icons/arrow.svg",
      title: "حظر البريد الإلكتروني غير المصرح به",
      description:
        "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.",
    },
    {
      dir: "/assets/kuber-icons/shield.svg",
      title: "حظر البريد الإلكتروني غير المصرح به",
      description:
        "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.",
    },
    {
      dir: "/assets/kuber-icons/stair.svg",
      title: "حظر البريد الإلكتروني غير المصرح به",
      description:
        "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.",
    },
  ];
</script>

<style scoped>
  .parent {
    background-color: #fcfcfc;
  }
  .container {
    font-family: "Cairo", sans-serif;
    direction: rtl;
  }
  .card {
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
  }
</style>
