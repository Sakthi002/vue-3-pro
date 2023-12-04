<template>

  <Transition name="modal">

    <div v-if="show" class="modal-mask">

      <div class="modal-container">

        <div>
          <slot>Default body</slot>
        </div>

        <footer class="modal-footer">

          <slot name="footer">

            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup>

  defineProps({
    show: Boolean
  })
</script>

<style>

  .modal-mask{
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: grid;
    place-items: center;
  }

  .modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
  }

  .modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: .6rem;
    font-size: .8rem;
  }

  .modal-footer button {
    background: #ddd;
    border-radius: 10px;
    padding: 0.5rem;
  }

  .modal-footer button:hover {
    background: #c8c8c8;
  }

  .modal-enter-active, .modal-leave-active {
    transition: opacity .3s;
  }

  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-to, .modal-leave-from {
    opacity: 100;
  }
</style>