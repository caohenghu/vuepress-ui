# Radio 单选框

<script>
export default {
  data() {
    return {
      color: 1,
      color2: 1,
      colors: [{
        name:'红色',
        value: 1,
      },{
        name:'黄色',
        value: 2,
      },{
        name:'蓝色',
        value: 3,
      }]
    }
  }
}
</script>

<style lang="scss">
  .radio {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
</style>

## 基础用法

<br>

<div>
  <BaseRadio 
    class="radio" 
    name="color"
    :value="item.value" 
    v-model="color" 
    v-for="item of colors"
    :key="item.value"
  >{{item.name}}</BaseRadio>
</div>

::: details 点击查看代码

```vue
<template>
  <BaseRadio
    class="radio"
    name="color"
    :value="item.value"
    v-model="color"
    v-for="item of colors"
    :key="item.value"
  >
    {{ item.name }}
  </BaseRadio>
</template>

<script>
  export default {
    data() {
      return {
        color: 0,
        colors: [
          {
            name: '红色',
            value: 1
          },
          {
            name: '黄色',
            value: 2
          },
          {
            name: '蓝色',
            value: 3
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .radio {
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
  <BaseRadio
    class="radio"
    name="color"
    :value="item.value"
    v-model="color2"
    v-for="item of colors"
    :key="item.value"
    disabled
  >
    {{ item.name }}
  </BaseRadio>
</div>

::: details 点击查看代码

```vue
<template>
  <BaseRadio
    class="radio"
    name="color"
    :value="item.value"
    v-model="color"
    v-for="item of colors"
    :key="item.value"
    disabled
  >
    {{ item.name }}
  </BaseRadio>
</template>
```

:::

## 属性

| 名称     | 说明     | 类型                      | 可选值       | 默认值 |
| -------- | -------- | ------------------------- | ------------ | ------ |
| v-model  | 选项值   | boolean                   | -            | -      |
| name     | 原生属性 | string                    | -            | -      |
| value    | 原生属性 | boolean / string / number | -            | -      |
| disabled | 是否禁用 | boolean                   | true / false | false  |
