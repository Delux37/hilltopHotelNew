<template>	
<div>
  <div class="aselect">
	    <div class="selector" @click="toggle()">
	        <div class="label" :class="{whiteBground: isScrolled}">
				    <span>{{ $i18n.locale }}</span>
	        </div>
			<div class="arrow" :class="{ expanded : visible, whiteBgroundArrow: isScrolled }"></div>
	        <div :class="{ hidden : !visible, visible }">
	            <ul>
	                <li :class="{ current : item === value }" 
                    v-for="item in list" :key="item"
                     @click="select(item)">{{ item }}</li>
	            </ul>
	        </div>
	    </div>
	</div>
</div>
</template>

<script>
export default {
    data(){
    return {
			value: 'en',
			list: ["en","ru","ka"],
            visible: false
		}
    },
	methods: {
			toggle() {
				this.visible = !this.visible;
			},
			select(option) {
			    this.value = option;
				this.$i18n.locale = option;
			}
    },
	computed: {
		isScrolled(){
			return this.$store.getters.isScrolled;
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 3.6rem;
  line-height: 1;
  font-weight: 300;
  letter-spacing: .3rem;
  text-transform: uppercase;
  margin-bottom: 0;
  text-shadow: .3rem .4rem rgba(0,0,0,0.3);
}


.aselect {
	// width: 280px;
    // margin: 20px auto;
	&:hover{
		cursor: pointer;
	}
    background-color: transparent;
		.selector {
			border: none;
			background: transparent;
			position: relative;
			z-index: 1;
			.arrow {
				position: absolute;
				right: 10px;
				top: 40%;
				width: 0;
				height: 0;
				border-left: 7px solid transparent;
				border-right: 7px solid transparent;
				border-top: 10px solid #fff;
				transform: rotateZ(0deg) translateY(0px);
				transition-duration: 0.3s;
				transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
				@media(max-width: 800px){
					border-top: 5px solid #000;
					border-left: 3px solid transparent;
					border-right: 3px solid transparent;
					top: 50%;
					transform: translateY(-50%);
					transition: none;
				}
			}
			.expanded {
				transform: rotateZ(180deg) translateY(2px);
				@media(max-width: 800px){
					top: 9%;
					transform: rotateZ(0) translateY(0);
				}
			}
			.label {
				display: block;
				padding: 1.2rem;
				font-size: 1.6rem;
				color: #fff;
                margin-right: 2rem;
				text-transform: uppercase;
				@media(max-width: 800px){
					color: #000;
				}
            }
		}
		ul {
			width: 100%;
			list-style-type: none;
            padding: 0;
            margin: 0;
			font-size: 16px;
			position: absolute;
			z-index: 1;
            background: #fff;
			@media(max-width: 800px){
				position: static;
			}
		}
		li {
			padding: 12px;
			color: #000;
			&:hover {
				color: white;
				background: seagreen;
			}
		}
		.current {
			background: #eaeaea;
		}
		.hidden {
			// visibility: hidden;
			display: none;
		}
		.visible {
			// visibility: visible;
			display: block;
		}
	}
.whiteBground{
	color: #000 !important;
}
.whiteBgroundArrow{
	border-top: 10px solid rgb(119, 119, 119) !important;
}
</style>

