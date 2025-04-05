Page({
    data: {
      currentTime: '', // 初始化为空，在onLoad中设置
      amount: '',      // 金额输入
      activeTab: '支出', // 当前选中的标签
      categories: {    // 分类数据示例
        '餐饮': { iconBgColor: '#F47564', iconColor: '#ffffff' },
        '购物': { iconBgColor: '#f3f4f6', iconColor: '#4b5563' },
        // 其他分类...
      }
    },
  
    onLoad() {
      // 页面加载时设置当前时间
      this.setData({
        currentTime: this.getCurrentTime()
      });
    },
  
    // 获取当前时间
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },
  
    // 选择分类
    selectCategory(e) {
      const category = e.currentTarget.dataset.category;
      console.log('选中分类:', category);
      
      // 创建更新对象
      const updateData = {};
      
      // 重置所有分类样式
      Object.keys(this.data.categories).forEach(key => {
        updateData[`categories.${key}.iconBgColor`] = '#f3f4f6';
        updateData[`categories.${key}.iconColor`] = '#4b5563';
      });
      
      // 设置选中分类样式
      updateData[`categories.${category}.iconBgColor`] = '#F47564';
      updateData[`categories.${category}.iconColor`] = '#ffffff';
      
      this.setData(updateData);
    },
  
    // 金额输入处理
    handleAmountInput(e) {
      let value = e.detail.value.replace(/[^\d.]/g, '');
      
      // 处理小数点
      const decimalPoints = value.match(/\./g) || [];
      if (decimalPoints.length > 1) {
        value = value.substring(0, value.lastIndexOf('.'));
      }
      
      // 限制小数点后两位
      if (value.includes('.')) {
        const parts = value.split('.');
        if (parts[1].length > 2) {
          parts[1] = parts[1].substring(0, 2);
          value = parts.join('.');
        }
      }
      
      this.setData({
        amount: value
      });
    },
  
    // 完成按钮点击
    handleComplete() {
      const amount = this.data.amount || '0.00';
      console.log('记账完成:', amount);
      // 这里可以添加记账完成后的逻辑
      
      // 示例：显示成功提示
      wx.showToast({
        title: '记账成功',
        icon: 'success',
        duration: 2000
      });
      
      // 清空金额
      this.setData({
        amount: ''
      });
    },
  
    // 切换支出/收入/转账
    switchTab(e) {
      const type = e.currentTarget.dataset.type;
      this.setData({
        activeTab: type
      });
    }
  });