<template>
  <div
  id="plans"
    class="plans-parent min-h-screen w-full flex flex-col items-center justify-center relative bg-[#fcfcfc] overflow-hidden"
  >

    <!-- Header -->
    <h1
      class="relative z-10 text-4xl md:text-3xl font-bold text-[#2B1F51] text-center my-12"
    >
      اختر الخطط
    </h1>

    <!-- Cards Container -->
    <div class="container mx-auto px-4 pb-16 relative z-10 w-[80%]">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        <!-- Card 1 -->
        <div
          class="plan relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
        >
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-4">P2-HOST</h2>
            <div class="mb-2" dir="rtl">
              <span class="text-5xl text-[#2B1F51]">91.30</span>
              <span class="text-lg text-gray-600 mr-2">د.ل</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-sm mb-4">
              <span class="text-gray-400">120 دل</span>
              <span dir="rtl"
              class="bg-red-100 text-red-400 px-3 py-1 rounded-full text-xs font-semibold"
              >
              تخفيض 30%
            </span>
            </div>
          </div>

          <button
            @click="orderNow('P2-HOST')"
            class="w-full bg-[#2B1F51] text-white font-semibold py-3 px-6 rounded-xl mb-6 cursor-pointer"
          >
            اطلب الان
          </button>

          <div class="line w-60 h-px bg-[#ddd] mb-6 mx-auto"></div>

          <div class="space-y-4 text-sm px-5">
            <div class="flex items-center justify-start gap-3">
              <span class="text-gray-700">60GB NVMe Storage</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">15 Website (s)</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">4 RAM</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">3 CPU</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">cPanel Control Panel</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited Subdomains</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited MySQL & SQL Databases</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited Email Account</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited FTP Accounts</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Dedicated Name Server(ns1,ns2)</span>
            </div>
            <div class="line w-full h-px bg-[#ddd] mb-6"></div>
            <div class="text-center text-gray-500 text-xs cursor-pointer">
              <span>Compare Packages</span>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="plan relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
        >
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-4">P2-HOST</h2>
            <div class="mb-2" dir="rtl">
              <span class="text-5xl text-[#2B1F51]">91.30</span>
              <span class="text-lg text-gray-600 mr-2">د.ل</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-sm mb-4">
              <span class="text-gray-400">120 دل</span>
              <span
              dir="rtl"
              class="bg-red-100 text-red-400 px-3 py-1 rounded-full text-xs font-semibold"
              >
              تخفيض 30%
            </span>
            </div>
          </div>

          <button
            @click="orderNow('P2-HOST')"
            class="w-full bg-[#2B1F51] text-white font-semibold py-3 px-6 rounded-xl mb-6 cursor-pointer"
          >
            اطلب الان
          </button>

          <div class="line w-60 h-px bg-[#ddd] mb-6 mx-auto"></div>

          <div class="space-y-4 text-sm px-5">
            <div class="flex items-center gap-3">
              <span class="text-gray-700">60GB NVMe Storage</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">15 Website (s)</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">4 RAM</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">3 CPU</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">cPanel Control Panel</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited Subdomains</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited MySQL & SQL Databases</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited Email Account</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited FTP Accounts</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Dedicated Name Server(ns1,ns2)</span>
            </div>
            <div class="line w-full h-px bg-[#ddd] mb-6"></div>
            <div class="text-center text-gray-500 text-xs cursor-pointer">
              <span>Compare Packages</span>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="plan relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
        >
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-4">P2-HOST</h2>
            <div class="mb-2" dir="rtl">
              <span class="text-5xl text-[#2B1F51]">91.30</span>
              <span class="text-lg text-gray-600 mr-2">د.ل</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-sm mb-4">
              <span class="text-gray-400">120 دل</span>
              <span
              dir="rtl"
              class="bg-red-100 text-red-400 px-3 py-1 rounded-full text-xs font-semibold"
              >
              تخفيض 30%
            </span>
            </div>
          </div>

          <button
            @click="orderNow('P2-HOST')"
            class="w-full bg-[#2B1F51] text-white font-semibold py-3 px-6 rounded-xl mb-6 cursor-pointer"
          >
            اطلب الان
          </button>

          <div class="line w-60 h-px bg-[#ddd] mb-6 mx-auto"></div>

          <div class="space-y-4 text-sm px-5">
            <div class="flex items-center gap-3">
              <span class="text-gray-700">60GB NVMe Storage</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">15 Website (s)</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">4 RAM</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">3 CPU</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">cPanel Control Panel</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited Subdomains</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited MySQL & SQL Databases</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited Email Account</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Unlimited FTP Accounts</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-700">Dedicated Name Server(ns1,ns2)</span>
            </div>
            <div class="line w-full h-px bg-[#ddd] mb-6"></div>
            <div class="text-center text-gray-500 text-xs cursor-pointer">
              <span>Compare Packages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
  /* Minimal custom styles - most styling is now handled by Tailwind */
  .shadow-3xl {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  .plans-parent {
    font-family: "Cairo", sans-serif !important;
    background-image: url("/assets/plan.svg");
    background-repeat: no-repeat;
  }
  .container {
    background-color: transparent !important;
    padding-top: 100px;
  }
  .plan::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    top: 0;
    left: 0;
    border-radius: 1rem;
    background-color: #fbe06b;
    z-index: 10;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .plan:nth-child(2)::before {
    background-color: #C6CDE0;
  }
  .plan:nth-child(3)::before {
    background-color: #69A0E0;
  }

</style>
