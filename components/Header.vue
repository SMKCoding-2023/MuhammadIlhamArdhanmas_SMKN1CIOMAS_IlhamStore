<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const isAuthenticated = ref();
const router = useRouter();

isAuthenticated.value = useCookie("access_token").value;

const logout = async () => {
  await authStore.logout();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  accessToken.value = null;
  refreshToken.value = null;
  setTimeout(() => {
    isAuthenticated.value = useCookie("access_token").value;
  }, 100);
  router.push({
    path: "/",
  });
};
</script>


<template>
  <header class="mx-auto w-full max-w-screen-xl p-4 py-1 lg:py-5">
    <div class="container">
      <div class="flex justify-between items-center">
        <a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-18">IlhamStore</span>
  </a>

        <nav class="flex items-center gap-6">
          <NuxtLink to="/" class="text-base">Home</NuxtLink>
          <NuxtLink to="/product" class="text-base">Products</NuxtLink>
          <NuxtLink to="/cart" class="text-base">Cart</NuxtLink>
          <NuxtLink v-if="!isAuthenticated" to="/login"
            class="text-base bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-600/80">Login</NuxtLink>
          <div v-else class="text-base cursor-pointer bg-red-600 px-6 py-2 text-white rounded-lg hover:bg-red-600/80"
            @click="logout">
            Logout
          </div>
        </nav>
      </div>
    </div>
  </header>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
</template>