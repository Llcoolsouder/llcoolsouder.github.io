<script>
export default {
    props: {
        icons: Array
    },
    computed: {
        maxIconWidth() {
            return 100 / this.icons.length + 'vw';
        }
    }
}
</script>

<template>
<hr class="line-break">
<div class="container">
    <template v-for="icon in icons">
        <ls-icon v-bind="icon"></ls-icon>
    </template>
</div>
</template>

<style scoped lang="scss">

.line-break {
    margin-top: 1rem;
    height: 3px;
    border: 1px lsStyle.$muted-color;
    border-style: solid none;
}

.container {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    height: 2vh; 
    width: 100%;
    gap: 1rem;
}

.container ::v-deep(img) {
    max-width: v-bind('maxIconWidth');
    height: 100%;
}

</style>