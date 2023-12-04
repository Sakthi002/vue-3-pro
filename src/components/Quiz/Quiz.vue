<script setup>

  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";

  import { provide } from "vue";

  let props = defineProps({
    quiz: Object
  });

  provide('quiz', props.quiz);

  // provide('name', {
  //   name : name,
  //   changeName: (val) => name.value = val
  // });
</script>

<template>

  <h1>{{name}}</h1>

  <QuizHeader></QuizHeader>

  <QuizQuestion></QuizQuestion>

  <QuizFooter :quiz="quiz"></QuizFooter>
</template>