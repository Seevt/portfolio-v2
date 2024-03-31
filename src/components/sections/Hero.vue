<script setup lang="ts">
import Section from '../Section.vue';
import Worldmap from "../icons/Worldmap.vue"
import Phone from "../icons/Phone.vue"
import GitHub from "../icons/Github.vue"
import LinkedIn from "../icons/Linkedin.vue"
import Mail from "../icons/Mail.vue"
import { basics } from "@/locales/en.json"

const { profiles } = basics

type SocialIcon = Record<string, string | any>;

const SOCIAL_ICONS: SocialIcon = {
    GitHub,
    LinkedIn,
};

const Icon = (network: string) => SOCIAL_ICONS[network]
</script>

<template>

    <Section>
        <div class="container">
            <article class="info-stack">
                <h1>{{ $t("basics.name") }}</h1>
                <h2>{{ $t("basics.label") }}</h2>
                <a href="https://www.google.es/maps/place/Granada/" title="Ver ubicación en Google" target="_blank"
                    aria-role="location" class="location">
                    <Worldmap />
                    {{ $t("basics.location.city") }}, {{ $t("basics.location.region") }}
                </a>
                <span aria-role="alias"> {{ $t("basics.alias") }} </span>
                <footer class="no-print">
                    <a :href="`mailto:${basics.email}`" :title="'Enviar correo a ' + $t('basics.name')" target="_blank"
                        rel="noopener noreferrer">
                        <Mail />
                    </a>

                    <a :href="`tel:${basics.phone}`" :title="`Llamar a ${basics.name}`">
                        <Phone />
                    </a>

                    <template v-for="profile in profiles" :key="profile">
                        <a :href="profile.url" :title="`Visitar el perfil de ${profile.username} en ${profile.network}`"
                            target="_blank" rel="noopener noreferrer">
                            <component :is="Icon(profile.network)" />
                        </a>
                    </template>

                </footer>

                <ul class="print">
                    <li>{{ basics.email }}</li>
                    <li>{{ basics.phone }}</li>
                    <li>{{ basics.url }}</li>
                </ul>
            </article>
            <figure>
                <img :src="basics.image" alt="personal id" />
            </figure>
        </div>
    </Section>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}

.info-stack {
    display: flex;
    flex-direction: column;
}

.info-stack>* {
    margin-block: 0;
}

.info-stack>*+* {
    margin-top: var(--inner-stack-spacing);
}

.info-stack>h2 {
    color: hsl(var(--description-color));
    font-weight: 300;
    font-size: var(--size--1);
}

.info-stack>a.location> :global(svg) {
    margin-top: -2px;
}

.info-stack>a.location,
span[aria-role="alias"] {
    font-size: var(--size--2);
    font-weight: 300;
    color: hsl(var(--description-color));
}

.info-stack>a.location {
    --space: 8px;
    display: flex;
    align-items: center;
    gap: var(--space);
}

.info-stack>a.location:hover {
    text-decoration: underline;
    cursor: pointer;
}

footer.no-print {
    --space: 5px;
    display: flex;
    gap: var(--space);
}

footer.no-print>a {
    border: 1.5px solid hsl(var(--faded-description-color));
    padding: 0.4rem;
    border-radius: calc(var(--border-radius) / 2);
    color: hsl(var(--description-color));
}

figure {
    --max-size: 7rem;
    display: flex;
    align-items: center;
    max-width: var(--max-size);
    max-height: var(--max-size);
    border-radius: var(--border-radius);
    border: 1px dashed hsl(var(--terciary-color));
}

img {
    display: block;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: var(--border-radius);
}

@media (max-width: 760px) {
    figure {
        --max-size: 5rem;
    }
}

@media (max-width: 350px) {
    figure {
        display: none;
    }
}

ul.print {
    display: none;
}

ul.print>li {
    text-decoration: underline;
    font-size: var(--size--1);
    color: hsl(var(--description-color));
}

@media print {
    footer.no-print {
        display: none;
    }

    ul.print {
        display: flex;
        flex-direction: column;
        gap: var(--inner-stack-spacing);
    }
}
</style>