<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { ref } from 'vue'
import { ElInput } from 'element-plus'

defineOptions({
  name: 'Menu111'
})

const { t } = useI18n()

const text = ref('')
</script>

<template>
  <ContentWrap :title="t('levelDemo.menu')">
    <div class="flex items-center"> Menu111: <ElInput v-model="text" class="pl-20px" /> </div>
  </ContentWrap>
</template>
