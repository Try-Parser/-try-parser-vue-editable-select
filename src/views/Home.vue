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
			{ display: "1", value: "1" },
			{ display: "2", value: "2" },
			{ display: "3", value: "3" },
			{ display: "4", value: "4" },
			{ display: "5", value: "5" },
			{ display: "6", value: "6" },
			{ display: "7", value: "7" },
			{ display: "8", value: "8" },
			{ display: "9", value: "9" },
			{ display: "10", value: "10" },
			{ display: "11", value: "11" },
			{ display: "12", value: "12" }, 
		]

		wew(a:any) {
			console.log("sure" , a)
		}
	}
</script>

<style lang="scss"></style>