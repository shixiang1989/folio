<template>
  <div>
    <!-- ═══ Hero (dark, animated) ═══ -->
    <section class="hero-section">
      <div class="hero-eyebrow">2026 · Vol. 1</div>
      <h1 class="hero-title">阅读与生活<br><em>的杂志</em></h1>
      <p class="hero-sub">在书页间发现世界，在生活里记录时光。<br>一本慢阅读的私人杂志。</p>
      <div class="hero-actions">
        <NuxtLink to="/articles/reading" class="btn-primary">开始阅读</NuxtLink>
        <NuxtLink to="/about" class="btn-ghost">关于 Folio</NuxtLink>
      </div>
    </section>

    <!-- ═══ Featured (light, large card) ═══ -->
    <section v-if="featured" class="section-light featured">
      <div class="featured-inner">
        <div class="featured-label">Featured</div>
        <NuxtLink :to="featured.path" class="featured-card">
          <img v-if="featured.cover" :src="featured.cover" :alt="featured.title" class="featured-card-image" />
          <div v-else class="featured-card-image-placeholder">📖</div>
          <div class="featured-card-body">
            <h2>{{ featured.title }}</h2>
            <p>{{ featured.description }}</p>
            <span class="btn-pill">阅读全文</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ═══ Grid (light, card grid) ═══ -->
    <section class="section-white" style="padding:80px 0">
      <div class="section-label">
        <h2>最近笔记</h2>
        <p>读书笔记与生活随想</p>
      </div>
      <div class="grid">
        <NuxtLink v-for="a in gridArticles" :key="a.path" :to="a.path" class="card">
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

    <!-- ═══ CTA (dark) ═══ -->
    <section class="cta-section">
      <h2>开始你的阅读之旅</h2>
      <p>没有算法，没有焦虑。只有安静的文字与思考。</p>
      <NuxtLink to="/articles/reading" class="btn-primary">浏览读书笔记</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('home-articles', () =>
  queryCollection('content').where('path', 'LIKE', '/articles/%').order('date', 'DESC').all()
)

const featured = computed(() => articles.value?.[0] ?? null)
const gridArticles = computed(() => articles.value?.slice(1, 7) ?? [])
</script>

<script lang="ts">
import { computed } from 'vue'
</script>
