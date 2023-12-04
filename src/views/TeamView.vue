<script setup>

  import TeamHeader from "@/components/Team/TeamHeader.vue";
  import TeamMembersList from "@/components/Team/TeamMembersList.vue";
  import TeamFooter from "@/components/Team/TeamFooter.vue";

  import {useTeamStore} from "@/stores/TeamStore";

  import Modal from "@/components/Modal.vue";
  import {ref} from "vue";

  let team = useTeamStore();

  team.fill();

  setTimeout(()=>{

    team.grow(25);

  },2000);

  let showModal = ref(false);

</script>

<template>

  <TeamHeader @add="showModal = true"></TeamHeader>

  <div class="place-self-center flex flex-col gap-y-3">

    <TeamMembersList></TeamMembersList>

  </div>

  <TeamFooter></TeamFooter>

  <Modal :show="showModal" @close="showModal = false">

    <template #default>

      <p>Need to add a new member?</p>
    </template>
  </Modal>
</template>