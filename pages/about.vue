<template>
  <div class="about-page">
    <div class="hero-label" style="margin-bottom:16px;text-align:center;">About</div>
    <h1>关于 Folio</h1>

    <div class="about-divider"></div>

    <p>
      <strong>Folio</strong> 是一本私人杂志。
    </p>
    <p>
      用杂志的方式记录阅读与生活。
      这里没有算法推荐，没有流量焦虑，只有安静的文字与思考。
    </p>
    <p>
      每一篇文章都是慢读的产物。每一次记录都是真实的生活切片。
    </p>
    <p>
      如果你也喜欢慢阅读、深思考，欢迎常来翻阅。
    </p>

    <div class="about-divider"></div>

    <NuxtLink
      to="/"
      style="
        display: inline-flex; align-items: center; gap: 8px;
        font-size: 14px; font-weight: 600; color: var(--accent);
        text-decoration: none; padding: 8px 20px; border-radius: var(--radius-pill);
        transition: background 150ms ease;
      "
    >
      ← 回首页翻阅
    </NuxtLink>
  </div>
</template>
