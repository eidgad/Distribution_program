<template>
  <div
  id="help"
    class="container bg-[#fcfcfc] mx-auto p-4 sm:p-8 gap-4 grid grid-cols-1 lg:grid-cols-6 min-h-screen"
  >
    <!-- Main content area - responsive across all screen sizes -->
    <div class="accordion col-span-1 lg:col-span-5 order-1 lg:order-none">
      <div class="max-w-4xl mx-auto p-3 sm:p-6 min-h-screen">
        <!-- Content wrapper with consistent styling -->
        <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <!-- FAQ Accordion Section - shows when showAccordion is true -->
          <div v-if="showAccordion" class="space-y-3 sm:space-y-4" dir="rtl">
            <!-- Loop through accordion items -->
            <div
              v-for="(item, index) in accordionData"
              :key="index"
              class="rounded-lg overflow-hidden"
            >
              <!-- Accordion header button -->
              <button
                @click="toggleAccordion(index)"
                class="w-full px-4 sm:px-6 py-3 sm:py-4 text-right flex justify-between items-center focus:outline-none cursor-pointer"
                :aria-expanded="activeAccordion === index"
                :aria-controls="`accordion-content-${index}`"
              >
                <!-- Accordion title - responsive text size -->
                <span
                  class="text-base sm:text-lg font-semibold text-gray-800 pr-2 text-right"
                >
                  {{ item.title }}
                </span>

                <!-- Chevron icon with rotation animation -->
                <svg
                  :class=" [
                    'w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform duration-200 flex-shrink-0',
                    activeAccordion === index ? 'rotate-180' : '',
                  ]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 6V18"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <!-- Accordion content with smooth transition -->
              <Transition
                enter-active-class="transition-all duration-300 ease-in-out"
                leave-active-class="transition-all duration-300 ease-in-out"
                enter-from-class="max-h-0 opacity-0"
                enter-to-class="max-h-96 opacity-100"
                leave-from-class="max-h-96 opacity-100"
                leave-to-class="max-h-0 opacity-0"
              >
                <div
                  v-show="activeAccordion === index"
                  :id="`accordion-content-${index}`"
                  class="px-4 sm:px-6 py-3 sm:py-4 bg-[#ffffff] overflow-hidden"
                  role="region"
                >
                  <!-- Accordion content text - responsive typography -->
                  <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {{ item.content }}
                  </p>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Help Center Paragraph Section - shows when showAccordion is false -->
          <Transition
            enter-active-class="transition-all duration-300 ease-in-out"
            leave-active-class="transition-all duration-300 ease-in-out"
            enter-from-class="opacity-0 transform translate-y-4"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-from-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform translate-y-4"
          >
            <div v-if="!showAccordion" class="space-y-4" dir="rtl">
              <!-- Help center title - responsive sizing -->
              <h2
                class="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center"
              >
                تحتاج للمساعدة؟
              </h2>

              <!-- Article content with responsive typography -->
              <div class="prose prose-sm sm:prose-lg max-w-none">
                <p
                  v-for="(paragraph, index) in paragraphSections"
                  :key="index"
                  class="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-justify text-sm sm:text-base"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Buttons Section -->
    <div
      class="flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-4 order-2 lg:order-none py-5"
    >
      <!-- info button - toggles accordion view -->
      <div
        class="bg-[#ffffff] cursor-pointer w-full max-w-xs lg:max-w-none"
        @click="showAccordion = true"
        :class=" [
          'rounded-lg p-3 sm:p-4 text-center ',
          showAccordion ? 'text-black-900 shadow-lg' : 'shadow-lg',
        ]"
      >
        <!-- Icon for info -->
        <img
          src="/assets/info.png"
          class="w-12 h-12 sm:w-15 sm:h-25 mx-auto mb-2"
          loading="lazy"
        />
        <h3
          class="text-sm sm:text-base py-2 px-0"
          :class="showAccordion ? 'border-b-2 border-blue-500' : ''"
        >
          الاسئلة الشائعة
        </h3>
      </div>

      <!-- Help Center Button - toggles paragraph view -->
      <div
        class="cursor-pointer w-full max-w-xs lg:max-w-none bg-[#ffffff]"
        @click="showAccordion = false"
        :class=" [
          'rounded-lg p-3 sm:p-4 text-center',
          !showAccordion
            ? 'bg-[#fffff] text-black-900 shadow-lg '
            : 'shadow-lg',
        ]"
      >
        <!-- Icon for Help Center -->
        <img
          src="/assets/help.png"
          class="w-12 h-12 sm:w-15 sm:h-25 mx-auto mb-2"
          loading="lazy"
        />
        <h3
          class="text-sm sm:text-base py-2 px-0"
          :class="!showAccordion ? 'border-b-2 border-blue-500' : ''"
        >
          مركز المساعدة
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Reactive state management
  const showAccordion = ref(true); // Controls which view is active (FAQ vs Help Center)
  const activeAccordion = ref(0); // Tracks which accordion item is currently open

  // FAQ data structure - easily extensible for more questions
  const accordionData = [
    {
      title: "ما هو المُخدّم الافتراضي المخصص (VPS)؟",
      content:
        "المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.",
    },
    {
      title: "متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟",
      content:
        "المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.",
    },
    {
      title: "ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟",
      content:
        "المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.",
    },
    {
      title: "ماهي المواقع المتاحة لاستضافة VPS؟",
      content:
        "المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.",
    },
  ];

  // Help center content - structured as separate paragraphs for better readability
  const paragraphSections = [
    "هذا القسم يحتوي على المعلومات التي يمكنك من خلالها التواصل مع فريقنا للحصول على اعلى مستوى للخدمة المقدمة",
    "يمكنك التواصل معنا عبر البريد الإلكتروني أو من خلال نموذج الاتصال الموجود في موقعنا. نحن هنا لمساعدتك في أي استفسارات أو مشاكل قد تواجهها.",
    "هاتف : 123-456-7890 او  من خلال info@example.com",
  ];

  /**
   * Toggles accordion item open/closed state
   * @param {number} index - The index of the accordion item to toggle
   */
  const toggleAccordion = (index) => {
    // Close accordion if clicking on already open item, otherwise open the clicked item
    activeAccordion.value = activeAccordion.value === index ? null : index;
  };
</script>

<style scoped>
  * {
    font-family: "cairo",sans-serif;
  }
  .accordion [role="region"] {
    transition: max-height 0.3s ease-in-out;
  }
</style>
