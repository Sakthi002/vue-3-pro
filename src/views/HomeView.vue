<script setup>

  import {useStore} from "@/composables/useStore";

  import TaggableTextarea from "@/components/TaggableTextarea.vue";

  import {ref} from "vue";

  let food = useStore('food', 'chips');

  let age = useStore('age', '28');

  let obj = useStore('obj', { one: "one" });

  setTimeout(()=>{

    console.log(obj.value)
    obj.value.one = "CHANGED";
  },3000);

  let comment = ref("test value");

  setTimeout(()=>{

    comment.value = "UPDATED"
  },2000);

</script>

<template>

  <main>

    <p>What is your favorite food? <input type="text" v-model="food"></p>

    <p>How old are you? <input type="text" v-model="age"></p>

    <br>

    <TaggableTextarea v-model="comment" style="width: 100%; height: 300px;"></TaggableTextarea>
  </main>
</template>
