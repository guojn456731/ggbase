<style lang="less" scoped>
@import './loginCart.less';
</style>
<template>
<Card class="cart" style="width:330px">
    <p slot="title" style="text-align: left;">
        <Icon type="ios-film-outline"></Icon>
        登录
    </p>
    <Form ref="formCustom" :rules="ruleCustom">
        <FormItem>
            <Input prefix="ios-contact"  v-model="loginName"/>
            </FormItem>
            <FormItem>
                <Input prefix="ios-lock" type="password" v-model="password"/>
            </FormItem>
                <FormItem>
                    <Button type="primary" long @click="handleSubmit('formCustom')">登陆</Button>

                </FormItem>`
    </Form>
    <p class="login-tip">输入任意用户名和密码即可</p>
</Card>
</template>

<script>
import {
    login
} from '../../../../api/index.js'
export default {
    data() {
        return {
            loginName: "",
            password: "",
            ruleCustom: {
                loginName: [{
                    required: true,
                    message: "账号不能为空",
                    trigger: "blur"
                }],
                password: [{
                    required: true,
                    message: "密码不能为空",
                    trigger: "blur"
                }]
            }
        }
    },
    methods: {
        handleSubmit() {
            // this.$refs.formCustom.validate(valid => {
                // if (valid) {
                //     this.loading = true;
                // }
                login({
                    loginName: this.loginName,
                    password: this.password,
                }).then(res => {
                    console.log(res)
                })

            // })
        }
    }
}
</script>
