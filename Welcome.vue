<template>
	<p> {{ text }} </p
</template>


<script>
module.exports = {
	data: function () {
		return {
			text: 'Welcome'
		}
	}
}
</script>


<style scoped>
p {
	font-size: 2em;
	text-align: center;
}
</style>