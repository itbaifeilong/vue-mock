<template>
	<div>
	<select v-model="locale">
      <option>en</option>
      <option>cn</option>
    </select>
		<!--<p>{{$t('message.hello')}}</p>-->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lang:'en',
				locale:'en'
			}
		},
		watch:{
			locale(val){
				this.$i18n.locale = val
			}
		},
		methods:{
			switchLang()  {
        			this.$i18n.locale = this.lang 
			},
			
		}
	}
</script>

<style>
</style>