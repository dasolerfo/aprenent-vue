<template>
    <div>
        <p>SlotComp.vue</p>
        <slot>
            <h4>This is fallback content</h4>
        </slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>                  