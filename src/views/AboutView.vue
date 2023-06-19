<template>
    <testCoba />
    <ProfilePage />
    <FooterPage />
</template>

<script>
import testCoba from '@/components/testCoba.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
    components: {
        testCoba,
        ProfilePage,
        FooterPage
    }
}
</script>
