<template>
  <div class="note">
    <span
      class="note__delite"
      title="Delite"
      @click="$emit('delite-note', note.id)"
      >&times;</span
    >
    <div class="note__wrapper">
      <h2 class="note__title">{{ note.title }}</h2>
      <p class="note__text">{{ note.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotesItem",
  props: ["note"],
};
</script>

<style lang="scss" scoped></style>
