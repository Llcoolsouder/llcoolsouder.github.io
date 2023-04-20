<script>
export default {

}
</script>

<template>
<h2>
    <ContentSlot :use="$slots.default" unwrap="p"></ContentSlot>
</h2>
<hr class="line-break">
</template>

<style scoped lang="scss">

h2 {
    text-align: center;
    margin-block-start: 0px;
    margin-block-end: 0px;
    text-transform: uppercase;
    letter-spacing: 1ch;
}


.line-break {
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, lsStyle.$color-secondary, lsStyle.$color-tertiary);
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: none;
}


</style>