<template>
  <div class="about">
    <button @click="flash('Warning','It Works from about page also...','warning')">Click Me</button>
  </div>

  {{counter.count}} - Current count
</template>

<script setup>

import {useFlash} from "@/composables/useFlash";

let { flash } = useFlash();

import {counter} from "@/stores/CounterStore";

</script>
