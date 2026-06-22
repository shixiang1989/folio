<template>
  <div>
    <section class="hero">
      <div class="hero-label">{{ categoryLabel }}</div>
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDesc }}</p>
    </section>

    <div class="article-grid">
      <NuxtLink v-for="a in articles" :key="a.path" :to="a.path" class="card">
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

    <div v-if="articles.length === 0" class="empty">
      <div class="empty-num">—</div>
      <p>还没有文章，敬请期待。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const category = route.params.category as string

const pageTitle = category === 'reading' ? '读书笔记' : '生活随想'
const pageDesc = category === 'reading'
  ? '书页之间，思想与灵魂的对话。'
  : '生活里的光与影，琐碎与诗意。'
const categoryLabel = category === 'reading' ? 'Reading Notes' : 'Life'

const { data: articles } = await useAsyncData(`articles-${category}`, () => {
  let q = queryCollection('content').where('path', 'LIKE', '/articles/%')
  if (category === 'reading') q = q.where('category', '=', 'reading')
  else if (category === 'life') q = q.where('category', '=', 'life')
  return q.order('date', 'DESC').all()
})
</script>
