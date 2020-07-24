<template>
  <div class="addnote__modal">
    <div class="addnot__modal__body">
      <span class="note__delite" @click="closeModal" title="Delite"
        >&times;</span
      >
      <h2>Create New Note</h2>
      <form @submit.prevent="onSubmit">
        <input placeholder="Title" type="text" v-model="title" />
        <textarea placeholder="Text" type="text" v-model="body" />
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AddModal",
  data: () => ({
    title: "",
    body: "",
  }),
  computed: {
    ...mapState(["showModal"]),
  },
  methods: {
    ...mapActions(["CLOSE_TO_MODAL"]),
    closeModal() {
      this.CLOSE_TO_MODAL();
    },
    onSubmit() {
      if (this.title.trim() && this.body.trim()) {
        const newNote = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        };
        this.$emit("add-note", newNote);
        this.title = "";
        this.body = "";
        this.closeModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.addnote__modal {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.addnot__modal__body {
  background: #f8fdfb;
  height: 300px;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

h2 {
  margin-bottom: 20px;
}

form {
  text-align: center;
}

input,
textarea {
  width: 97%;
  padding-left: 2%;
  border-radius: 5px;
  margin-bottom: 20px;
  height: 30px;
  border: 1px solid #000;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
}

textarea {
  height: 50px;
  resize: none;
  padding-top: 5px;
}

button {
  background: #000;
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: #000;
    background: #fff;
  }

  &:focus {
    outline: none;
  }
}

.note__delite {
  opacity: 1;
  right: 10px;
}
</style>
