Page({
    data: {
      showDialog: false,
      netAssets: 128562.00,
      totalAssets: 128562.00,
      totalLiabilities: 0.00,
      totalBorrowed: 0.00,
      totalLent: 0.00,
      fundAccounts: [
        { name: '朝朝宝', type: '储蓄卡', balance: 95662.00 },
        { name: '支付宝', type: '第三方支付', balance: 5000.00 }
      ],
      investmentAccounts: [
        { name: '股票账户', type: 'A股', balance: 30000.00 },
        { name: '基金账户', type: '货币基金', balance: 2900.00 }
      ]
    },
  
    getFundTotal() {
      return this.data.fundAccounts.reduce((sum, item) => sum + item.balance, 0);
    },
  
    getInvestmentTotal() {
      return this.data.investmentAccounts.reduce((sum, item) => sum + item.balance, 0);
    },
  
    showAddDialog() {
      this.setData({ showDialog: true });
    },
  
    hideDialog() {
      this.setData({ showDialog: false });
    },
  
    confirmAdd() {
      wx.showToast({ title: '添加成功', icon: 'success' });
      this.hideDialog();
    }
  });