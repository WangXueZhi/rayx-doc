# 定时更新svn

## 安装crontab
```
yum install crontabs
```

## 创建任务shell脚本
```
cd /home/crontab_sh
vim svn_update.sh
```

脚本内为svn更新代码， `/home/svn` 为要更新的svn目录，`/home/update-product.log` 为执行结果输出日志

```
#! /bin/sh
echo `svn update /home/svn --username xxxxx --password xxx --no-auth-cache > /home/update-product.log`
```

## 增加crontab任务
```
crontab -e
```

添加任务，然后保存，以root用户执行前面创建的shell脚本
```
*/1 * * * * root /root/home/crontab_sh/svn_update.sh
// 一分钟执行一次
```

重启crontab服务

```
service crond restart
```