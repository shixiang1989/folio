<template>
  <div class="folio-app">
    <header class="site-header">
      <div class="site-header-inner">
        <NuxtLink to="/" class="site-logo">
          Fol<span>i</span>o
        </NuxtLink>
        <nav class="site-nav">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/articles/reading">读书</NuxtLink>
          <NuxtLink to="/articles/life">生活</NuxtLink>
          <NuxtLink to="/about">关于</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <div class="ornament">
        <span>✻</span>
      </div>
      <p>Folio &mdash; 一本关于阅读与生活的杂志</p>
      <p style="margin-top:0.5rem">&copy; {{ new Date().getFullYear() }} · Built with Nuxt 3</p>
    </footer>
  </div>
</template>

<style>
@import '~/assets/css/main.css';
</style>
