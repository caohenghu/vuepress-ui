<template>
  <button
    :class="['ui-button', type, shape, size, { disabled }]"
    @click="clickHandle"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary' // primary / success / warning / danger
      },
      shape: {
        type: String,
        default: 'round' // rect / round / circle
      },
      size: {
        type: String,
        default: 'middle' // large / middle / small
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickHandle() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary-normal: #08a1ef;
  $primary-hover: #59c7f9;
  $primary-active: #0091ea;

  $success-normal: #18cfa1;
  $success-hover: #48d5b2;
  $success-active: #25bb96;

  $warning-normal: #f2a653;
  $warning-hover: #ffc36d;
  $warning-active: #e99438;

  $danger-normal: #ff5448;
  $danger-hover: #ff7e7e;
  $danger-active: #e63428;

  @mixin color-bg($color) {
    background: $color;
    border-color: $color;
  }

  @mixin btn-color($color) {
    color: #fff;
    border-style: solid;
    border-width: 1px;

    @include color-bg($color);

    &:hover {
      @include color-bg(lighten($color, 10%));
    }

    &:active {
      @include color-bg(darken($color, 10%));
    }
  }

  @mixin size($width, $height, $fontSize) {
    width: $width;
    height: $height;
    font-size: $fontSize;
  }

  .ui-button {
    position: relative;
    padding: 0;
    cursor: pointer;
    outline: 0;
    transition: all 0.3s;

    &.primary {
      @include btn-color($primary-normal);

      &.disabled {
        @include color-bg(lighten($primary-normal, 40%));
      }
    }

    &.success {
      @include btn-color($success-normal);

      &.disabled {
        @include color-bg(lighten($success-normal, 40%));
      }
    }

    &.warning {
      @include btn-color($warning-normal);

      &.disabled {
        @include color-bg(lighten($warning-normal, 30%));
      }
    }

    &.danger {
      @include btn-color($danger-normal);

      &.disabled {
        @include color-bg(lighten($danger-normal, 30%));
      }
    }

    &.round {
      border-radius: 3px;
    }

    &.large {
      $height: 40px;

      @include size(108px, $height, 16px);

      &.circle {
        border-radius: $height/2;
      }
    }

    &.middle {
      $height: 36px;

      @include size(90px, $height, 14px);

      &.circle {
        border-radius: $height/2;
      }
    }

    &.small {
      $height: 30px;

      @include size(72px, $height, 12px);

      &.circle {
        border-radius: $height/2;
      }
    }

    &.disabled {
      cursor: not-allowed;
    }
  }
</style>
