<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lh-content',
    props: {
      tit: {
        type: String,
        default: '宝贝的每个精彩瞬间'
      }
    }
  }
</script>
<style >
.header ~ .content { padding-top:55px;}
.footer ~ .content { padding-bottom:55px;}
</style>
