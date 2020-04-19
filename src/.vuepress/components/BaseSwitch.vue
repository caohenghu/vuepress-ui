<template>
  <div :class="{ active: checked, disabled }" class="ui-switch">
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="$emit('change', $event.target.checked)"
    />
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
        type: Boolean
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .ui-switch {
    position: relative;
    display: inline-block;
    width: 32px;
    padding: 2px;
    cursor: pointer;
    background: #ff5448;
    border-radius: 10px;
    transition: all 0.3s;

    &::before {
      float: left;
      width: 16px;
      height: 16px;
      content: '';
      background: #fff;
      border-radius: 50%;
      transition: all 0.3s;
    }

    &.active {
      background: #1593ff;

      &::before {
        transform: translateX(100%);
      }
    }

    &.disabled {
      background: #eee;

      input {
        cursor: not-allowed;
      }
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
      opacity: 0;
    }
  }
</style>
