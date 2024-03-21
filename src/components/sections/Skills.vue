<script setup lang="ts">
import Section from "../Section.vue";
import { skills } from "@/locales/en.json"
</script>
<template>
    <Section :title="$t('skills_title')">
        <ul class="skills-cluster">
            <li v-for="skill in skills" :key="skill.name">
                <div class="list-item-box">
                    <span>
                        {{ skill.name }}
                    </span>
                </div>
            </li>
        </ul>
    </Section>
</template>
<style scoped>
.skills-cluster {
    --space: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
    justify-content: flex-start;
    align-items: center;
    margin-top: calc(var(--inner-stack-spacing) * 1.2);
}

.skills-cluster>li {
    display: flex;
    align-items: center;
}

.skills-cluster>li>.list-item-box {
    padding: 0.15rem 0.5rem;
    border-radius: calc(var(--border-radius) / 2);
    color: hsl(var(--faded-description-color));
    background: hsl(var(--accent-color) / 0.8);
}

.skills-cluster>li>* {
    font-size: var(--size--2);
    cursor: default;
}
</style>