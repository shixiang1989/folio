<template>
  <div>
    <!-- Hero -->
    <section class="magazine-hero">
      <div class="hero-issue">2026 · Vol. 1</div>
      <h1>阅读与生活<br>的杂志</h1>
      <p class="hero-tagline">
        在书页间发现世界，在生活里记录时光。一本慢阅读的私人杂志。
      </p>
    </section>

    <div class="ornament">
      <span>✦</span>
    </div>

    <!-- Recent Articles -->
    <div class="section-header">
      <h2>📖 最近笔记</h2>
      <p class="section-desc">最近更新的读书笔记与生活随想</p>
    </div>

    <div class="article-grid">
      <NuxtLink
        v-for="article in recentArticles"
        :key="article.path"
        :to="article.path"
        class="article-card"
      >
        <div v-if="article.cover" class="article-card-cover-wrapper">
          <img :src="article.cover" :alt="article.title" class="article-card-cover" />
        </div>
        <div v-else class="article-card-cover-placeholder">
          {{ article.category === 'reading' ? '📚' : '🌿' }}
        </div>
        <div class="article-card-body">
          <div class="article-card-category">
            {{ article.category === 'reading' ? '读书笔记' : '生活随想' }}
          </div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <div class="article-card-meta">{{ article.date }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: recentArticles } = await useAsyncData('home-articles', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/articles/%')
    .order('date', 'DESC')
    .limit(6)
    .all()
)
</script>
