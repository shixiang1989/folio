<template>
  <div>
    <section class="hero">
      <div class="hero-label">2026 · Vol. 1</div>
      <h1>阅读与生活<br><em>的杂志</em></h1>
      <p>在书页间发现世界，在生活里记录时光。一本慢阅读的私人杂志。</p>
    </section>

    <div class="section-hd">
      <h2>最近笔记</h2>
      <p>最近更新的读书笔记与生活随想</p>
    </div>

    <div class="article-grid">
      <NuxtLink v-for="a in recentArticles" :key="a.path" :to="a.path" class="card">
        <div class="card-cover">
          <img v-if="a.cover" :src="a.cover" :alt="a.title" />
          <div v-else class="card-cover-placeholder">
            {{ a.category === 'reading' ? '📚' : '🌿' }}
          </div>
        </div>
        <div class="card-body">
          <h3>{{ a.title }}</h3>
          <p>{{ a.description }}</p>
          <div class="card-meta">{{ a.date }}</div>
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
