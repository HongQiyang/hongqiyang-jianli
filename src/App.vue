<template>
  <div class="app-shell">
    <div class="ocean-backdrop" aria-hidden="true">
      <div class="grid-layer"></div>
      <div class="light-stream stream-a"></div>
      <div class="light-stream stream-b"></div>
      <div class="ethereal-veil"></div>
      <div class="signal-thread thread-a"></div>
      <div class="signal-thread thread-b"></div>
      <div class="wave-ribbon wave-a"></div>
      <div class="wave-ribbon wave-b"></div>
      <div class="sonar-arc"></div>
      <div class="depth-markers"></div>
      <div class="robot-harbor">
        <div class="bio-robot tuna-small">
          <span></span>
        </div>
        <div class="bio-robot tuna-large">
          <span></span>
        </div>
        <div class="bio-robot dolphin-bot">
          <span></span>
        </div>
      </div>
      <div class="sonar-interface"></div>
      <div class="system-topology">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="magic-staff staff-a"></div>
      <div class="magic-staff staff-b"></div>
      <div class="sound-ripples">
        <span class="sound-ripple"></span>
        <span class="sound-ripple"></span>
        <span class="sound-ripple"></span>
      </div>
      <div class="floating-notes">
        <span class="floating-note note-a">♪</span>
        <span class="floating-note note-b">♫</span>
        <span class="floating-note note-c">♩</span>
        <span class="floating-note note-d">♬</span>
      </div>
      <div class="acoustic-symbols">
        <span class="acoustic-symbol symbol-lambda">λ</span>
        <span class="acoustic-symbol symbol-db">dB</span>
        <span class="acoustic-symbol symbol-frequency">f</span>
        <span class="acoustic-symbol symbol-wave">∿</span>
      </div>
      <div class="hydrophone-cluster">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="particle-field"></div>
    </div>

    <header class="site-header">
      <RouterLink class="brand" to="/">洪旗阳</RouterLink>
      <nav class="site-nav" aria-label="主导航">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/projects">项目</RouterLink>
        <RouterLink to="/resume">简历</RouterLink>
        <RouterLink to="/contact">联系</RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="site-footer">
      <span>Ocean Acoustics · Biomimetic Robotics · Underwater Systems</span>
      <RouterLink to="/contact">联系</RouterLink>
    </footer>
  </div>
</template>
