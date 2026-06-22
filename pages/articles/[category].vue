<template>
  <div>
    <section class="hero-section" style="padding:100px 24px 120px">
      <div class="hero-eyebrow">{{ pageEyebrow }}</div>
      <h1 class="hero-title" style="font-size:clamp(32px,6vw,48px)">{{ pageTitle }}</h1>
      <p class="hero-sub">{{ pageDesc }}</p>
    </section>

    <section class="section-white" style="padding:80px 0">
      <div class="grid">
        <NuxtLink v-for="a in articles" :key="a.path" :to="a.path" class="card">
          <img v-if="a.cover" :src="a.cover" :alt="a.title" class="card-img" />
          <div v-else class="card-img-placeholder">{{ a.category === 'reading' ? '📖' : '🌿' }}</div>
          <div class="card-body">
            <h3>{{ a.title }}</h3>
            <p>{{ a.description }}</p>
            <div class="card-meta">{{ a.date }}</div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <div v-if="articles.length===0" class="empty">
      <h2>—</h2><p>还没有文章</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const c = route.params.category as string
const pageTitle = c === 'reading' ? '读书笔记' : '生活随想'
const pageDesc = c === 'reading' ? '书页之间，思想与灵魂的对话。' : '生活里的光与影，琐碎与诗意。'
const pageEyebrow = c === 'reading' ? 'Reading Notes' : 'Life'

const { data: articles } = await useAsyncData(`articles-${c}`, () => {
  let q = queryCollection('content').where('path', 'LIKE', '/articles/%')
  if (c === 'reading') q = q.where('category', '=', 'reading')
  else if (c === 'life') q = q.where('category', '=', 'life')
  return q.order('date', 'DESC').all()
})
</script>
