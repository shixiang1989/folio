<template>
  <div>
    <section class="hero">
      <div class="hero-label">{{ categoryLabel }}</div>
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDesc }}</p>
    </section>

    <div class="article-grid">
      <NuxtLink
        v-for="article in articles"
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

    <div v-if="articles.length === 0" class="empty-state">
      <h2>—</h2>
      <p>还没有文章，敬请期待。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const category = (route.params.category as string) || 'all'

const pageTitle = category === 'reading' ? '读书笔记' : '生活随想'
const pageDesc = category === 'reading'
  ? '书页之间，思想与灵魂的对话。'
  : '生活里的光与影，琐碎与诗意。'
const categoryLabel = category === 'reading' ? 'Reading Notes' : 'Life'

const { data: articles } = await useAsyncData(`articles-${category}`, () => {
  let query = queryCollection('content').where('path', 'LIKE', '/articles/%')

  if (category === 'reading') {
    query = query.where('category', '=', 'reading')
  } else if (category === 'life') {
    query = query.where('category', '=', 'life')
  }

  return query.order('date', 'DESC').all()
})
</script>
