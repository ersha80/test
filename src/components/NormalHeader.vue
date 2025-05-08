<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();


const switchToEnglish = () => locale.value = 'en';

const downloadFile = async () => {
  const linkA = "https://v16m-default.tiktokcdn.com/508a8e426f7623de4097f9bda0173be8/681cfb26/video/tos/alisg/tos-alisg-pve-0037c001/ogVCSizBwsBAkqLifP0IAQAyIJTMcCEUa0u0Oq/?a=0&bti=OHYpOTY0Zik3OjlmOm01MzE6ZDQ0MDo%3D&ch=0&cr=0&dr=0&er=0&lr=all&net=0&cd=0%7C0%7C0%7C0&cv=1&br=2340&bt=1170&cs=0&ds=3&ft=EeF4ntZZI0Gr12NvbtYaWIxR_Owc-Q_45SY&mime_type=video_mp4&qs=0&rc=aTU6ZWZoZTNmNWdkNWQ4OEBpamZqbWw5cnRvMzMzODczNEBiNjIyMDEzNmIxNS82MGNgYSNtazExMmRjXjZhLS1kMTFzcw%3D%3D&vvpl=1&l=202505082042362AE4EA5B314F2B7E98E3&btag=e000b0000";

  try {
    const response = await fetch(linkA);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'video.mp4'; // 设置下载文件名
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('下载失败:', error);
  }
}


</script>

<template>

  <div class="normal-header">
    <div class="logo">
      <img src="../assets/logo.svg">
    </div>

    <p>{{ $t('message.hello') }}</p>
    <button @click="downloadFile">下载</button>
    <button @click="switchToEnglish">English</button>
  </div>
</template>

<style scoped>
.normal-header {
  display: flex;
  height: 4rem;
  flex-direction: row;
  background-color: aqua;
}
.logo {
  display: inline-flex;
  width: 3rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
}
</style>
