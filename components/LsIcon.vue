<script>
export default {
    props: {
        imgSrc: String,
        altText: String,
        href: String
    }
}
</script>

<template>
    <a :href="href">
        <img :src="imgSrc" :alt="altText" >
    </a>
</template>

<style scoped lang="scss">
img {
    // height: 100%;
}
</style>