<template>
	<div class="autocomplete">
		<input :list="name" :name="name" @focus="show_list = true" @blur="hide" v-model="selected_value" autocomplete="false" type="search">
		<div class="autocomplete-items" v-show="show_list" @mousedown="onMousedown">
			<div v-for="(v, i) in copied_list" :key="i" @click="setValue(v)"> {{ v[display] }} </div>
			<div v-show="show_not_found" >
				<slot name="error">
					<p> Not Found </p>
				</slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

	@Component
	export default class SingleSelect extends Vue {
		@Prop(String) name?: string
		@Prop({default: 'display'}) display!: string 
		@Prop() item: any
		
		selected_value: string = ""
		show_list: boolean = false;
		copied_list = []
		mousedown = false;
		show_not_found = false;

		@Watch('selected_value')
		checkFilter(): void {
			if(this.item != "undefined") {
				this.copied_list = this.item.filter(this.check)

				console.log(this.copied_list)

				if(this.copied_list.length == 0) {
					this.show_not_found = true;
				} else {
					this.show_not_found = false;
				}
			}
		}
		
		onMousedown() {
			this.mousedown = true;
		}

		check(e: any): boolean {
			return e[this.display].toString().match(this.selected_value);
		}

		hide() {
			if(!this.mousedown) {
				this.show_list = false;
			}
		}

		setValue(val: any) {
			this.show_list = false;
			this.selected_value = val.display
			this.mousedown = false;
			this.show_not_found = false;
			this.$emit('value', val)
		}

		mounted () {
			this.copied_list = Object.assign(this.item)
		}
	}
</script>

<style lang="scss">
	.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: inline-block;

	  	&-items {
	  		max-height: 400px;
	  		overflow-y: scroll;

	  		&::-webkit-scrollbar {
			    -webkit-appearance: none;
			}

			&::-webkit-scrollbar:vertical {
			    width: 11px;
			}

			&::-webkit-scrollbar:horizontal {
			    height: 11px;
			}

			&::-webkit-scrollbar-thumb {
			    border-radius: 8px;
			    border: 2px solid white; /* should match background, can't be transparent */
			    background-color: rgba(0, 0, 0, .5);
			}

			position: absolute;
			border: 1px solid #d4d4d4;
			border-top: none;
			z-index: 99;
			/*position the autocomplete items to be the same width as the container:*/
			top: 100%;
			left: 0;
			right: 0;
	
			div {
				padding: 10px;
				cursor: pointer;
				background-color: #fff; 
				border-bottom: 1px solid #d4d4d4; 
				border-right: 1px solid #d4d4d4;
				
				&:last-child {
					border-bottom: unset;	
				}

				&:hover {
					background-color: #e9e9e9; 
				}
			}
		}

		&-active {
			/*when navigating through the items using the arrow keys:*/
			background-color: DodgerBlue !important; 
			color: #ffffff; 
		}

	}
</style>