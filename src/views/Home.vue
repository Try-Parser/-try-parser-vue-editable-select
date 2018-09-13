<template>
  <div class="home">
    <vue-single-slect name="browser" :item="items" display="display" @value="wew" />
  </div>
</template>


<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import SingleSelect from '@/components/SingleSelect.vue' 

	@Component({
	  components: {
	    "vue-single-slect": SingleSelect
	  }
	})
	export default class Home extends Vue {
		items = [ 
			{ display: "Namesue 1", value: "Frank 1" },
			{ display: "Namesue 2", value: "Frank 2" },
			{ display: "Namesue 3", value: "Frank 3" },
			{ display: "Namesue 4", value: "Frank 4" },
			{ display: "Namesue 5", value: "Frank 5" },
			{ display: "Namesue 6", value: "Frank 6" },
			{ display: "Namesue 7", value: "Frank 7" },
			{ display: "Namesue 8", value: "Frank 8" },
			{ display: "Namesue 9", value: "Frank 9" },
			{ display: "Namesue 10", value: "Frank 10" },
			{ display: "Namesue 11", value: "Frank 11" },
			{ display: "Namesue 12", value: "Frank 12" }, 
		]

		wew(a:any) {
			console.log("sure" , a)
		}
	}
</script>

<style lang="scss"></style>