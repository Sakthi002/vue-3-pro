<script setup>

import {useTeamStore} from "@/stores/TeamStore";

let team = useTeamStore();

import TeamMember from "@/components/Team/TeamMember.vue";
</script>

<template>

  <table class="table-fixed border-spacing-2 border-separate">

    <thead>

    <th class="text-left px-6 py-2">Name</th>

    <th class="text-left px-6 py-2">Email</th>

    <th class="text-left px-6 py-2">Status</th>

    </thead>

    <tbody>

    <TeamMember v-for="member in team.members" :member="member" :key="member.email">

    </TeamMember>

    </tbody>
  </table>

  <p v-if="team.spotsRemaining" class="text-right text-gray-600 italic">There are no remaining team spots. Upgrade to add more.</p>

</template>