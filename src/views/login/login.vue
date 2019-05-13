<style lang="less">
    @import './login.less';
</style>
<template>
    <div class="login_bg">
        <login-cart></login-cart>
    </div>
</template>
<script>
import loginCart from './components/login_cart'
export default {
    components:{
        loginCart
    }
}
</script>