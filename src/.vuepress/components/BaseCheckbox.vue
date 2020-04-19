<template>
  <div :class="{ active: checked, disabled }" class="ui-checkbox">
    <div class="box"></div>
    <span class="text" v-if="$slots.default"><slot /></span>
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
  .ui-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;

    &.active {
      .box {
        background: #1593ff;
        border: 1px solid #1593ff;

        &::after {
          opacity: 1;
        }
      }
    }

    &.disabled {
      .box {
        border: 1px solid #ccd5db;
      }

      .text {
        color: #ccd5db;
      }

      input {
        cursor: not-allowed;
      }

      &.active {
        .box {
          background: #eee;
          border: 1px solid #ccd5db;

          &::after {
            border-bottom: 1px solid #ccd5db;
            border-left: 1px solid #ccd5db;
            opacity: 1;
          }
        }
      }
    }

    .box {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border: 1px solid #1593ff;
      border-radius: 3px;
      transition: all 0.3s;

      &::after {
        position: absolute;
        width: 60%;
        height: 35%;
        pointer-events: none;
        content: '';
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        opacity: 0;
        transition: all 0.3s;
        transform: translate(0, -2px) rotate(-45deg);
      }
    }

    .text {
      margin-left: 6px;
      font-size: 14px;
      line-height: 1;
    }

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
      opacity: 0;
    }
  }
</style>
