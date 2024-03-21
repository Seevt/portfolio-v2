<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
function changeLang(locale: string) {
    router.push(`/${locale}`)
}
</script>
<template>
    <nav class="wrapper">
        <ul>
            <li v-for="locale in $i18n.availableLocales" @click="changeLang(locale)" :key="`locale-${locale}`"
                :class="{ active: $i18n.locale === locale }">
                {{ locale.toLocaleUpperCase() }}
            </li>
        </ul>
    </nav>
</template>


<style scoped>
@media print {
    .wrapper {
        display: none
    }
}

.wrapper {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 0.8rem;
    padding: 0.5em;
    background-color: #f1f1f1;
    border-radius: 5px;
}

ul {
    display: flex;
    gap: 0.5em;
}

li {
    color: #777;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    padding: 4px;
    height: 32px;
    width: 32px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

li:hover {
    background: #ddd;
    border: 1px solid #ddd;
}

li.active {
    font-weight: 600;
    color: #333;
    background-color: #eee;
    border: 1px solid #ddd;
    cursor: default;
}
</style>