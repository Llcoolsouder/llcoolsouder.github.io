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

a {
    width: 100;
    height: 100%;
}

img {
    height: 100%;
}

</style>