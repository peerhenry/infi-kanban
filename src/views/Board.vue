<template lang="pug">
  .about
    h1 This is an about page
    .board-wrapper
      .container
</template>

<script>
export default {
  name: 'Board',
}
</script>

<style lang="scss">
.board-wrapper {
  overflow-x: scroll;
  white-space: nowrap;
}

.container {
  display: grid;
}
</style>