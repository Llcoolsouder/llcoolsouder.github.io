<script>
</script>

<template>
    <div class="container">
        <div class="column">
            <h1>
                <ContentSlot :use="$slots.name" unwrap="p"/>
            </h1>
            <ContentSlot :use="$slots.brief"/>
            <ContentSlot :use="$slots.roles" unwrap="p"/>
        </div>
        <div class="column">
            <slot name="pic" unwrap="p"></slot>
        </div>
    </div>   
</template>

<style scoped lang="scss">

h1 {
    font-size: 2.5em;
    margin-bottom: 0;
}

::v-deep(p) {
    margin-top: 0;
    font-size: small;
}

::v-deep(ul) {
    padding-left: 0;
    list-style: '- ';
}

::v-deep(li) {
    list-style-position: inside;
}

::v-deep(a), ::v-deep(a:visited) {
    color: lsStyle.$color-tertiary;
    text-decoration: underline;
    transition: color 1s ease;
}

::v-deep(a):hover {
    color: lsStyle.$color-quaternary;
}

::v-deep(img) {
    border-radius: 50%;
    padding: 1rem;
    display: block;
    margin: auto;
    max-width: calc(lsStyle.$body-width / 4);
}

.container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

@media (max-width: lsStyle.$body-width) {
    .container {
        flex-direction: column;
    } 

    h1 {
        text-align: center;
    }

    ::v-deep(p) {
        text-align: center;
    }

    ::v-deep(ul) {
    text-align: center;
    list-style: none;
}

::v-deep(li) {
    list-style-position: inside;
}
}


</style>