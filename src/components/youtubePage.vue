<template>
    <iframe width="910" height="511.875" src="https://www.youtube.com/embed/1ArVtCQqQRE" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
iframe {
    padding: 3% 0;
}


@media only screen and (max-width: 700px) {
    iframe {
        width: 90%;
        padding: 3%;
    }
}
</style>