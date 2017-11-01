'use strict';
import crypto from 'crypto';
module.exports = app => {
  class WxController extends app.Controller {
    * hello() {
      const { signature, echostr, timestamp, nonce } = this.ctx.request.query;
      const { WXTOKEN } = this.config;
      let arr = [WXTOKEN, timestamp, nonce];
      arr.sort();
      let sha1 = crypto.createHash('sha1');
      sha1.update(arr);
      const meg = msg = sha1.digest('hex');
      this.ctx.body = echostr;
    }
  }
  return WxController;
};
