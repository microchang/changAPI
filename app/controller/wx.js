'use strict';

module.exports = app => {
  class WxController extends app.Controller {
    * hello() {
      this.ctx.body = 'this is chang';
    }
  }
  return WxController;
};
