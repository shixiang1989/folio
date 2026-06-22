<template>
  <div>
    <template v-if="page">
      <article class="article">
        <div class="article-eyebrow">{{ page.category === 'reading' ? '读书笔记' : '生活随想' }}</div>
        <h1>{{ page.title }}</h1>
        <div class="article-meta">{{ page.date }}</div>

        <div v-if="page.tags?.length" class="article-tags">
          <span v-for="t in page.tags" :key="t" class="tag">{{ t }}</span>
        </div>

        <div v-if="page.cover" class="article-cover">
          <img :src="page.cover" :alt="page.title" />
        </div>

        <section class="prose">
          <ContentRenderer :value="page" />
        </section>

        <footer class="article-footer">
          <NuxtLink to="/" class="back-link">← 返回首页</NuxtLink>
        </footer>
      </article>
    </template>

    <div v-else-if="!pending" class="empty">
      <div class="empty-num">404</div>
      <p>找不到这篇文章</p>
      <NuxtLink to="/" class="back-link">← 返回首页</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page, pending } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)
if (page.value && (page.value.path === '/' || page.value.path === '/about')) {
  page.value = null
}
</script>
