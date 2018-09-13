# vue-editable-select

## setup
```
npm i @try-parser/vue-editable-select
```

### Usage
```
	import Vue from 'vue'
	import Components from '@try-parser/vue-editable-select'

	Vue.use(Components)
```

#### Template

```
    <vue-single-slect name="browser" :item="items" display="display" @value="returnValue" />
```

#### Script

```
	export default {
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

