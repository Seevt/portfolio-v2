<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

interface Language {
    language: string;
    fluency: string;
}

const langs_arr = computed(() => i18n.tm("languages") as Language[]);

</script>
<template>
    <div class="other-skills-container">

        <h3>{{ $t('languages_title') }}</h3>
        <ul class="languages-list">
            <li class="lang" v-for="lang in langs_arr">
                {{ lang.language }} - {{ lang.fluency }}
            </li>
        </ul>
    </div>
</template>
<style scoped>
.other-skills-container {
    margin-top: calc(var(--inner-stack-spacing)*2)
}

h3 {

    font-weight: bold;
    text-indent: .3em;
}

.languages-list {
    --indent: -2em;
    display: flex;
    flex-direction: column;
    margin-top: calc(var(--inner-stack-spacing) * 2);
    gap: var(--inner-stack-spacing);
    list-style-type: square;
    list-style-position: inside;
    text-indent: var(--indent);
    padding-left: calc(var(--indent)*-1);
    margin-left: calc(var(--indent)*-1);
    /* 10ch less than normal container */
    width: min(100%, 65ch);
}

.lang {
    color: hsl(var(--description-color));

}

@media (max-width: 768px) {
    h3 {
        text-indent: 0.2em;
    }

    .languages-list {
        --indent: -1em
    }
}
</style>
