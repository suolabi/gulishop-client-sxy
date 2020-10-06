module.exports = {
	//  写自己想要配置的东西去覆盖系统自带的
	// 关闭ESLint的规则
	lintOnSave: false,
	devServer:{
		proxy: {
			"/api": {
			  // 转发的目标路径
			  target: "http://182.92.128.115",
			  //把所有/api重写为空串，根据实际需求
			//   pathRewrite: {"^/api" : ""}
			}
		  }
	}
}