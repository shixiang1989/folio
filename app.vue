<template>
  <div :class="{ dark: isDark }">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-inner">
        <NuxtLink to="/" class="nav-logo">
          Fol<span>i</span>o
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link" exact-active-class="router-link-active">首页</NuxtLink>
          <NuxtLink to="/articles/reading" class="nav-link">读书</NuxtLink>
          <NuxtLink to="/articles/life" class="nav-link">生活</NuxtLink>
          <NuxtLink to="/about" class="nav-link">关于</NuxtLink>
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
            {{ isDark ? '☀' : '☾' }}
          </button>
        </div>
      </div>
    </nav>
    <div class="nav-spacer"></div>

    <!-- Main -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <p>Folio &mdash; 一本关于阅读与生活的杂志</p>
      <p style="margin-top:4px">&copy; {{ new Date().getFullYear() }} &middot; Built with Nuxt 3</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('folio-theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('folio-theme')
  if (saved === 'dark') {
    isDark.value = true
  } else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
  }
})
</script>

<style>
@import '~/assets/css/main.css';
</style>
