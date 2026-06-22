<template>
  <div>
    <template v-if="page">
      <article class="article-page">
        <header class="article-header">
          <div class="article-card-category" style="text-align:center;margin-bottom:0.5rem;">
            {{ page.category === 'reading' ? '读书笔记' : '生活随想' }}
          </div>
          <h1>{{ page.title }}</h1>
          <div class="article-meta">{{ page.date }}</div>
          <div v-if="page.tags?.length" class="article-tags">
            <span v-for="tag in page.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </header>

        <img
          v-if="page.cover"
          :src="page.cover"
          :alt="page.title"
          class="article-featured-image"
        />

        <section class="article-content">
          <div class="prose">
            <ContentRenderer :value="page" />
          </div>
        </section>
      </article>
    </template>

    <div v-else-if="!pending" class="not-found">
      <h2>404</h2>
      <p>找不到这篇文章</p>
      <NuxtLink to="/" style="color: var(--color-terracotta)">← 返回首页</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page, pending } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)

// Filter out index and listing pages from the catch-all
if (page.value && (page.value.path === '/' || page.value.path === '/about')) {
  page.value = null
}
</script>
