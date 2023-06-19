<template>
    <testCoba />
    <TypeGame />
    <LeaderBoard />
    <ArticlePage />
    <YoutubePage />
    <FooterPage />
</template>

<script>
import ArticlePage from '@/components/ArticlePage.vue';
import testCoba from '@/components/testCoba.vue';
import TypeGame from '@/components/TypeGame.vue';
import YoutubePage from '@/components/youtubePage.vue';
import FooterPage from '@/components/FooterPage.vue';
import LeaderBoard from '@/components/LeaderBoard.vue';

export default {
    components: {
        ArticlePage,
        testCoba,
        TypeGame,
        YoutubePage,
        FooterPage,
        LeaderBoard
    }
}
</script>
