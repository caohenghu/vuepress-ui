# Button 按钮

<script>
  export default {
    methods: {
      handlePrimary() {
        alert('默认按钮')
      }
    }   
  }
</script>

## 按钮颜色

<br>

<BaseButton type="primary">默认按钮</BaseButton>
<BaseButton type="success">成功按钮</BaseButton>
<BaseButton type="warning">警告按钮</BaseButton>
<BaseButton type="danger">危险按钮</BaseButton>

::: details 点击查看代码

```vue
<template>
  <BaseButton>默认按钮</BaseButton>
  <BaseButton type="success">成功按钮</BaseButton>
  <BaseButton type="warning">警告按钮</BaseButton>
  <BaseButton type="danger">危险按钮</BaseButton>
</template>
```

:::

## 按钮形状

<br>

<BaseButton type="primary">默认按钮</BaseButton>
<BaseButton type="primary" shape="circle">圆形按钮</BaseButton>
<BaseButton type="primary" shape="rect">矩形按钮</BaseButton>

::: details 点击查看代码

```vue
<template>
  <BaseButton type="primary">默认按钮</BaseButton>
  <BaseButton type="primary" shape="circle">圆角按钮</BaseButton>
  <BaseButton type="primary" shape="rect">矩形按钮</BaseButton>
</template>
```

:::

## 按钮尺寸

<br>

<BaseButton type="primary" size="large">大按钮</BaseButton>
<BaseButton type="primary">默认按钮</BaseButton>
<BaseButton type="primary" size="small">小按钮</BaseButton>

::: details 点击查看代码

```vue
<template>
  <BaseButton>默认按钮</BaseButton>
  <BaseButton type="primary" size="large">大按钮</BaseButton>
  <BaseButton type="primary">默认按钮</BaseButton>
  <BaseButton type="primary" size="small">小按钮</BaseButton>
</template>
```

:::

## 禁用状态

<br>

<BaseButton type="primary" disabled>默认按钮</BaseButton>
<BaseButton type="success" disabled>成功按钮</BaseButton>
<BaseButton type="warning" disabled>警告按钮</BaseButton>
<BaseButton type="danger" disabled>危险按钮</BaseButton>

::: details 点击查看代码

```vue
<template>
  <BaseButton>默认按钮</BaseButton>
  <BaseButton type="primary" disabled>默认按钮</BaseButton>
  <BaseButton type="success" disabled>成功按钮</BaseButton>
  <BaseButton type="warning" disabled>警告按钮</BaseButton>
  <BaseButton type="danger" disabled>危险按钮</BaseButton>
</template>
```

:::

## 属性

| 名称     | 说明     | 类型    | 可选值                               | 默认值  |
| -------- | -------- | ------- | ------------------------------------ | ------- |
| type     | 类型     | string  | primary / success / warning / danger | primary |
| shape    | 形状     | string  | round / circle / rect                | round   |
| size     | 尺寸     | string  | large / middle / small               | middle  |
| disabled | 是否禁用 | boolean | true / false                         | false   |

## 事件

| 名称  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| click | 点击事件的回调 | event    |
