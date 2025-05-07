<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const switchToChinese = () => locale.value = 'zh-CN';
const switchToEnglish = () => locale.value = 'en';

</script>

<template>

  <div class="normal-header">
    <div class="logo">
      <img src="../assets/logo.svg">
    </div>

    <p>{{ $t('message.hello') }}</p>
    <button @click="switchToChinese">中文</button>
    <button @click="switchToEnglish">English</button>
  </div>
</template>

<style scoped>
.normal-header {
  display: flex;
}
.logo {
  display: inline-flex;
  width: 3rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
}
</style>
