# Pagination 分页

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalCount: 100,
      maxPage: 5,
      showGoto: true
    }
  },
  methods: {
    change(pageIndex) {
      this.pageIndex = pageIndex
    }
  }
}
</script>

<style lang="scss">
ul {
  padding-left: 0;
}
</style>

## 基本用法

<br>

<BasePagination
:page-index="pageIndex"
:page-size="pageSize"
:total-count="totalCount"
:max-page="maxPage"
:show-goto="showGoto"
@change="change"
/>

::: details 点击查看代码

```vue
<template>
  <BasePagination
    :page-index="pageIndex"
    :page-size="pageSize"
    :total-count="totalCount"
    :max-page="maxPage"
    :show-goto="showGoto"
    @change="change"
  />
</template>

<script>
  export default {
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 100,
        maxPage: 5,
        showGoto: true
      }
    },
    methods: {
      change(pageIndex) {
        this.pageIndex = pageIndex
      }
    }
  }
</script>
```

:::

## 属性

| 名称       | 说明                                 | 类型    | 可选值       | 默认值 |
| ---------- | ------------------------------------ | ------- | ------------ | ------ |
| pageIndex  | 当前页，支持 .sync 修饰符            | number  | -            | 1      |
| pageSize   | 每页的数量                           | number  | -            | 10     |
| totalCount | 数据总量                             | number  | -            | 50     |
| maxPage    | 最多显示几页，只显示当前页的附近几页 | number  | -            | 10     |
| showGoto   | 是否显示跳转                         | boolean | true / false | true   |

## 事件

| 名称   | 说明           | 回调参数  |
| ------ | -------------- | --------- |
| change | 页码改变时触发 | pageIndex |
