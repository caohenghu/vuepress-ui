<template>
  <div :class="{ active: checkedValue === value, disabled }" class="ui-radio">
    <div class="box"></div>
    <span class="text" v-if="$slots.default"><slot /></span>
    <input
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="$emit('change', value)"
    />
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'checkedValue',
      event: 'change'
    },
    props: {
      value: {
        type: [String, Number, Boolean]
      },
      checkedValue: {
        type: [String, Number, Boolean]
      },
      name: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .ui-radio {
    position: relative;
    display: inline-flex;
    align-items: center;

    &.active {
      .box {
        border: 1px solid #1593ff;

        &::after {
          background: #1593ff;
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
            background: #ccd5db;
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
      border-radius: 50%;
      transition: all 0.3s;

      &::after {
        position: absolute;
        width: 6px;
        height: 6px;
        pointer-events: none;
        content: '';
        border-radius: 50%;
        opacity: 0;
        transition: all 0.3s;
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
