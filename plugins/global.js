export default defineNuxtPlugin((nuxtApp) => {
    const isUserLoggedIn = ref(false);

    // Provide the variable globally
    nuxtApp.provide("isUserLoggedIn", isUserLoggedIn);

    // Optional: Provide methods to interact with the state
    nuxtApp.provide("login", () => {
        isUserLoggedIn.value = true;
    });

    nuxtApp.provide("logout", () => {
        isUserLoggedIn.value = false;
    });
});
