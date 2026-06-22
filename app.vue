<template>
  <div>
    <nav class="nav">
      <div class="nav-inner">
        <NuxtLink to="/" class="nav-logo">Fol<span>i</span>o</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link" exact-active-class="router-link-active">首页</NuxtLink>
          <NuxtLink to="/articles/reading" class="nav-link">读书</NuxtLink>
          <NuxtLink to="/articles/life" class="nav-link">生活</NuxtLink>
          <NuxtLink to="/about" class="nav-link">关于</NuxtLink>
        </div>
      </div>
    </nav>
    <div class="nav-spacer"></div>
    <main><NuxtPage /></main>
    <footer class="site-footer">
      <p>Folio &mdash; 一本关于阅读与生活的杂志 &middot; &copy; {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style>@import '~/assets/css/main.css';</style>
