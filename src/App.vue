<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #f8fdfb;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

#app {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-top: 40px;
  // padding-bottom: 40px;
}

.note {
  width: 300px;
  height: 150px;
  background: #d7dde2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 4px 2px 11px 0px rgba(50, 50, 50, 0.25);
  transition: all 0.2s linear;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;

  &:nth-child(3 + 3n) {
    margin-right: 0;
  }

  &:hover {
    background: #f8fdfb;
    box-shadow: none;

    .addnot__item {
      background: #d7dde2;
    }

    .note__delite {
      opacity: 1;
    }
  }

  &--addnote {
    cursor: pointer;
  }
}

.note__delite {
  color: rgb(189, 61, 61);
  font-size: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s linear;

  &:hover {
    color: rgb(122, 30, 30);
  }
}

.note__title {
  margin-bottom: 20px;
  &::first-letter {
    text-transform: uppercase;
  }
}

.note__text {
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
