<template>
	<div class="bookshelf">
		<div class="book" v-for="book of books">BookName: {{book.name}}</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      books: [{
        name: 'nihao',
        author: '12323',
      }, {
        name: '323232',
        author: '12323',
      }, {
        name: '323232',
        author: '12323',
      }, {
        name: '323232',
        author: '12323',
      }, {
        name: '323232',
        author: '12323',
      }, {
        name: '323232',
        author: '12323',
      }, {
        name: '323232',
        author: '12323',
      }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@height: 800px;
.bookshelf {
	width: 100%;
	display: flex;
	border: 1px solid green;
	flex-flow: row wrap;
	justify-content: flex-start;
}

.book {
	flex:0 0 180px;
	height: 300px;
	border: 1px solid red;
	align-self: center;
	margin-top: 10px;
	margin-bottom: 10px;
}

</style>
