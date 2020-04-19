# Checkbox 复选框

<script>
  const hobbies = [
    {
      name: '篮球',
      value: 1,
      checked: true
    },
    {
      name: '足球',
      value: 2,
      checked: false
    },
    {
      name: '羽毛球',
      value: 3,
      checked: false
    }
  ]
  export default {
    data() {
      return {
        hobbies,
        hobbies2: JSON.parse(JSON.stringify(hobbies))
      }
    }
  }
</script>

<style lang="scss">
  .checkbox {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
</style>

## 基础用法

<br>

<div>
  <BaseCheckbox
    class="checkbox"
    v-for="item of hobbies"
    :key="item.value"
    v-model="item.checked"
  >{{item.name}}</BaseCheckbox>
</div>

::: details 点击查看代码

```vue
<template>
  <BaseCheckbox
    class="checkbox"
    v-for="item of hobbies"
    :key="item.value"
    v-model="item.checked"
  >
    {{ item.name }}
  </BaseCheckbox>
</template>

<script>
  export default {
    data() {
      return {
        hobbies: [
          {
            name: '篮球',
            value: 1,
            checked: true
          },
          {
            name: '足球',
            value: 2,
            checked: false
          },
          {
            name: '羽毛球',
            value: 3,
            checked: false
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .checkbox {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
</style>
```

:::

## 禁用状态

<br>

<div>
  <BaseCheckbox
    class="checkbox"
    v-for="item of hobbies2"
    :key="item.value"
    v-model="item.checked"
    disabled
  >{{item.name}}</BaseCheckbox>
</div>

::: details 点击查看代码

```vue
<template>
  <BaseCheckbox
    class="checkbox"
    v-for="item of hobbies"
    :key="item.value"
    v-model="item.checked"
    disabled
  >
    {{ item.name }}
  </BaseCheckbox>
</template>
```

:::

## 属性

| 名称     | 说明     | 类型    | 可选值       | 默认值 |
| -------- | -------- | ------- | ------------ | ------ |
| v-model  | 选项值   | boolean | -            | -      |
| disabled | 是否禁用 | boolean | true / false | false  |
