# Switch 开关

<script>
  export default {
    data() {
      return {
        open: true,
        open1: true
      }
    }
  }
</script>

## 基础用法

<br>

<BaseSwitch v-model="open"></BaseSwitch>

::: details 点击查看代码

```vue
<template>
  <BaseSwitch v-model="open"></BaseSwitch>
</template>

<script>
  export default {
    data() {
      return {
        open: true
      }
    }
  }
</script>
```

:::

## 禁用状态

<br>

<BaseSwitch v-model="open1" disabled></BaseSwitch>

::: details 点击查看代码

```vue
<template>
  <BaseSwitch v-model="open" disabled></BaseSwitch>
</template>

<script>
  export default {
    data() {
      return {
        open: true
      }
    }
  }
</script>
```

:::

## 属性

| 名称     | 说明     | 类型    | 可选值       | 默认值 |
| -------- | -------- | ------- | ------------ | ------ |
| v-model  | 选项值   | boolean | -            | -      |
| disabled | 是否禁用 | boolean | true / false | false  |
