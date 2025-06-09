<template>
    <div class="text-center my-40 py-20 bg-[#ffffff]">
        
        <h1 class="text-red-600 text-6xl">Error 404</h1>
        <h2 class="text-lg py-5 text-[#778da9]">Page Not Found</h2>
        <p class="text-red-500">Route path : {{this.$route.path}}</p>
        <button class="bg-[dodgerblue] text-white py-3 px-3 my-4 rounded"><NuxtLink to="/">Back To Home</NuxtLink></button>
    </div>
</template>
<script setup></script>
