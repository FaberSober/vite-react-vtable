import React, { useEffect } from 'react';
import EZUIKit from 'ezuikit-js';
import { Button, Space } from 'antd';

/**
 * @author xu.pengfei
 * @date 2025/4/29 16:23
 */
export default function VideoDemo01() {
  const accessToken = 'at.3uzs2p0x5tqhjhht9gi0a9nab3cgodzh-5c16wxp2p3-0zeddu5-pdw5bgc6n';
  const deviceSerial = 'FW3557066';

  useEffect(() => {
    const UIKitDEMO = new EZUIKit.EZUIKitPlayer({
      id: `ezuikit-player`,
      url: 'ezopen://open.ys7.com/FW3557066/1.live',
      accessToken,
      template: 'security',
    });
  }, []);

  // 开始云台控制（需HTTPS）
  const startPTZ = async (direction: number) => {
    const response = await fetch('https://open.ys7.com/api/lapp/device/ptz/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        accessToken,
        deviceSerial,
        channelNo: 1,
        direction, // 0=上 1=下 2=左 3=右
        speed: 1, // 速度1-100
      }),
    });
    console.log(await response.json());
    setTimeout(() => {
      stopPTZ(direction);
    }, 1000);
  };

  // 停止控制（必须调用）
  const stopPTZ = (direction = 0) => {
    fetch('https://open.ys7.com/api/lapp/device/ptz/stop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        accessToken,
        deviceSerial,
        channelNo: 1,
        direction, // 0=上 1=下 2=左 3=右
      }),
    });
  };

  return (
    <div>
      <div id="ezuikit-player" />

      <Space>
        <Button onClick={() => startPTZ(0)}>上</Button>
        <Button onClick={() => startPTZ(1)}>下</Button>
        {/*<Button onClick={stopPTZ}>停止</Button>*/}
      </Space>
    </div>
  );
}
