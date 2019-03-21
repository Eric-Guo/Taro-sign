import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtButton } from 'taro-ui'
import globalData from '../../util/global.js'

export default class AuthorizedButton extends Component {
    static defaultProps = {
        onCloseAuthorizeFn: () =>{},
        value: 0,
    }
    constructor() {
        super(...arguments)
        this.state={}
    }
    componentDidMount () {
    } 
    onGetUserInfo = e => {
        const { onCloseAuthorizeFn } = this.props
        const {
            userInfo,
        } = e.detail
        globalData.userInfo = userInfo
        onCloseAuthorizeFn()
        // Taro.switchTab({url: '/pages/index/index'})
    }
    render() {
        return (
            <View>
                <AtButton
                    type='primary'
                    circle
                    openType='getUserInfo'
                    onGetUserInfo={this.onGetUserInfo}
                >
                    授权登录
                </AtButton>
            </View>
        );
    }
}