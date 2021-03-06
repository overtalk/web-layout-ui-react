import { Request, Response } from 'express';


// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'XXOO 管理员',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    authority: 'admin',
  },
  // GET POST 可省略
  'POST /api/login/account': (req: Request, res: Response) => {
    const { userName } = req.body;
    if (userName === 'admin') {
      res.send({
        status: 'ok',
        token: 'admin',
      });
      return;
    }
    if (userName === 'user') {
      res.send({
        status: 'ok',
        token: 'user',
      });
      return;
    }
    res.send({
      status: 'error',
    });
  },
};
