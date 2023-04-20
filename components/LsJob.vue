<script>
export default {
    data() {
        return {
            contentIsShown: false
        }
    },
    methods: {
        toggleContentIsShown() {
            this.contentIsShown = !this.contentIsShown;
        },


    },
    computed: {
        contentMaxHeight() {
            return this.contentIsShown ?
                this.$refs.content.scrollHeight + 'px' :
                '0px'
        },
        bottomBorderWidth() {
            return this.contentIsShown ? '2px' : '0px'
        },
        bottomBorderTransitionFunction() {
            return this.contentIsShown ? 'step-start' : 'step-end'
        }
    }
}
</script>

<template>
    <div class="container">
        <button class="collapsible" @click="toggleContentIsShown">
            <slot name="employer"></slot>
        </button>
        <div class="content" ref="content">
            <b>
                <slot name="title"></slot>
            </b>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">

$border-radius: 0.4em;
$border-width: 1px;
$transition-duration: 0.5s;

* {
    font-family: lsStyle.$font-family;
}

.container {
    border-radius: $border-radius;
    border-bottom-style: solid;
    border-bottom-color: lsStyle.$font-color;
    border-bottom-width: v-bind("bottomBorderWidth");
    transition:
        border-bottom-width
        $transition-duration
        v-bind(bottomBorderTransitionFunction);
}

.collapsible {
    text-align: left;
    padding-left: 1em;
    font-weight: bold;
    width: 100%;
    border-radius: $border-radius;
    background-color: lsStyle.$color-secondary;
    border-width: $border-width;
    margin-bottom: - $border-width;
    border-color: black;
}

.collapsible:hover {
    filter: brightness(0.85);
}

.content {
    display: block;
    overflow: hidden;
    max-height: v-bind("contentMaxHeight");
    transition: max-height $transition-duration ease-out;
    padding: 0 1em;
}
</style>