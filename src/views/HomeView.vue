<template>
    <testCoba />
    <TypeGame />
    <ArticlePage />
</template>

<script>
import ArticlePage from '@/components/ArticlePage.vue';
import testCoba from '@/components/testCoba.vue';
import TypeGame from '@/components/TypeGame.vue'

export default {
    components: {
        ArticlePage,
        testCoba,
        TypeGame
    }
}
</script>
