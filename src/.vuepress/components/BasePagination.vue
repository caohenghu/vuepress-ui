<template>
  <div class="ui-pagination">
    <ul class="list">
      <li
        :class="{ disabled: pageIndex === 1 }"
        class="item big"
        @click="toPage(pageIndex - 1)"
      >
        上一页
      </li>
      <li
        :class="{ disabled: pageIndex === 1 }"
        class="item middle"
        @click="toPage(1)"
      >
        首页
      </li>
      <li
        v-for="item of showPages"
        :class="{ active: item === pageIndex }"
        :key="item"
        class="item"
        @click="toPage(item)"
      >
        {{ item }}
      </li>
      <li
        :class="{ disabled: pageIndex === pageCount }"
        class="item middle"
        @click="toPage(pageCount)"
      >
        尾页
      </li>
      <li
        :class="{ disabled: pageIndex === pageCount }"
        class="item big"
        @click="toPage(pageIndex + 1)"
      >
        下一页
      </li>
    </ul>
    <ul v-if="showGoto" class="list">
      <li class="item input">
        <input
          v-model.number.trim="toPageIndex"
          type="text"
          @keydown.enter="go(toPageIndex)"
        />
      </li>
      <li
        :class="{ disabled: toPageIndex < 1 || toPageIndex > pageCount }"
        class="item middle"
        @click="toPage(toPageIndex)"
      >
        跳转
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      pageIndex: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      totalCount: {
        type: Number,
        default: 50
      },
      maxPage: {
        type: Number,
        default: 10
      },
      showGoto: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        toPageIndex: 1
      }
    },
    computed: {
      pageCount() {
        return Math.ceil(this.totalCount / this.pageSize)
      },
      showPages() {
        const pages = []
        // 如果当前的激活的项小于要显示的页数
        if (this.pageIndex < this.maxPage) {
          // 总页数和要显示的页数哪个小就显示哪个
          let i = Math.min(this.pageCount, this.maxPage)
          while (i) {
            pages.unshift(i--)
          }
        } else {
          let middle = this.pageIndex - Math.floor(this.maxPage / 2)
          let i = this.maxPage
          if (middle > this.pageCount - this.maxPage) {
            middle = this.pageCount - this.maxPage + 1
          }
          while (i--) {
            pages.push(middle++)
          }
        }
        return pages
      }
    },
    methods: {
      toPage(pageIndex) {
        if (
          pageIndex === this.pageIndex ||
          pageIndex < 1 ||
          pageIndex > this.pageCount
        ) {
          return
        }
        this.$emit('change', pageIndex)
      }
    }
  }
</script>

<style lang="scss">
  .ui-pagination {
    font-size: 14px;

    .list {
      display: inline-flex;
      margin: 0;
      vertical-align: top;

      &:not(:first-child) {
        margin-left: 16px;
      }

      .item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ccd5db;
        transition: all 0.3s;

        &:not(:first-child) {
          margin-left: -1px;
        }

        &:first-child {
          border-radius: 3px 0 0 3px;
        }

        &:last-child {
          border-radius: 0 3px 3px 0;
        }

        &.disabled {
          color: #ccc;
          cursor: not-allowed;

          &:hover {
            color: #ccc;
          }
        }

        &:hover {
          color: #1593ff;
        }

        &.active {
          z-index: 1;
          color: #fff;
          background: #1593ff;
          border: 1px solid #1593ff;
        }

        &.big {
          width: 60px;
        }

        &.middle {
          width: 48px;
        }

        &.input {
          &:hover {
            color: inherit;
            background: inherit;
          }
        }

        input {
          width: 100%;
          height: 100%;
          padding: 0 6px;
          text-align: center;
          background: #fafafa;
          border: 0;
          border-radius: 3px 0 0 3px;
          outline: 0;
        }
      }
    }
  }
</style>
