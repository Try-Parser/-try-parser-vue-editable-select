# vue-editable-select

## setup
```
npm i @try-parser/vue-editable-select
```

### Usage
```
    <vue-single-slect name="browser" :item="items" display="display" @value="returnValue" />


    import { Component, Vue } from 'vue-property-decorator'
	import SingleSelect from '@/components/SingleSelect.vue' 

	@Component({
	  components: {
	    "vue-single-slect": SingleSelect
	  }
	})
	export default class Home extends Vue {
		items = [ 
			{ display: "Place 1", value: "Bar" },
			{ display: "Fool 2", value: "Foo" },
			{ display: "Pet 3", value: "Cat" },
		]

		returnValue(a:any) {
			console.log("sure" , a)
		}
	}
```

