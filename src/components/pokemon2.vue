<template>
  <div>
      <h1> {{num}} {{formattedName}} </h1>
      <small> {{url}} </small>
  </div>
</template>

<script>
export default {
    props: {
        num: Number,
        name: String,
        url: String
    },
    computed: {
        formattedName() {
            var newName = this.name[0].toUpperCase() + this.name.slice(1);
            return newName;
        },
    },
}
</script>

<style>

</style>