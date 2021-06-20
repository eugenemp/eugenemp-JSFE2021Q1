export default function createCarSVG(color: string) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="50" viewBox="0 0 100 50" version="1.1">
  <g id="surface1">
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 27.539062 8.273438 C 26.976562 8.414062 26.921875 8.492188 26.835938 9.21875 C 26.804688 9.453125 26.75 9.703125 26.710938 9.773438 C 26.679688 9.84375 25.953125 10.171875 25.101562 10.507812 C 19.054688 12.882812 14.570312 14.726562 12.578125 15.671875 C 11.304688 16.273438 10.84375 16.382812 9.289062 16.484375 C 8.625 16.523438 7.960938 16.59375 7.8125 16.640625 C 7.023438 16.890625 4.984375 17.09375 2.96875 17.132812 L 2.070312 17.148438 L 1.703125 17.773438 C 1.335938 18.382812 1.335938 18.398438 1.476562 18.554688 C 1.742188 18.835938 1.75 19.15625 1.515625 19.9375 C 1.28125 20.710938 1.25 21.328125 1.367188 22.828125 C 1.40625 23.351562 1.398438 23.515625 1.320312 23.515625 C 1.09375 23.515625 0.671875 23.953125 0.460938 24.40625 C 0.0703125 25.234375 -0.117188 27.085938 0.0859375 28.054688 C 0.1875 28.507812 0.1875 28.539062 0.109375 29.296875 C 0.0703125 29.71875 0.234375 31.15625 0.328125 31.203125 C 0.34375 31.210938 0.554688 31.359375 0.804688 31.523438 C 1.375 31.90625 1.765625 32.328125 1.835938 32.640625 C 1.96875 33.257812 3.140625 33.851562 4.609375 34.054688 C 5.421875 34.171875 12.179688 34.8125 13.101562 34.867188 L 13.351562 34.882812 L 13.390625 33.632812 C 13.445312 31.835938 13.78125 30.554688 14.53125 29.265625 C 16.726562 25.523438 21.695312 24.007812 25.507812 25.914062 C 27.976562 27.15625 29.648438 29.226562 30.179688 31.710938 C 30.351562 32.539062 30.40625 34.5625 30.28125 35.765625 L 30.21875 36.40625 L 53.671875 36.40625 C 75.976562 36.40625 77.125 36.398438 77.070312 36.265625 C 76.8125 35.585938 76.632812 33.726562 76.71875 32.664062 C 76.9375 30.164062 78.101562 28.234375 80.304688 26.734375 C 83.421875 24.601562 86.921875 24.53125 90.015625 26.546875 C 91.882812 27.773438 93.117188 29.609375 93.609375 31.914062 C 93.75 32.570312 93.726562 34.578125 93.570312 35.273438 C 93.507812 35.570312 93.460938 35.828125 93.476562 35.84375 C 93.53125 35.90625 96.492188 35.6875 97.210938 35.578125 C 98.617188 35.359375 99.1875 35.070312 99.585938 34.390625 C 99.773438 34.070312 99.804688 33.945312 99.804688 33.398438 C 99.796875 33.054688 99.734375 32.484375 99.648438 32.125 C 99.507812 31.507812 99.507812 31.4375 99.632812 30.640625 C 99.875 29.085938 99.945312 28.25 99.953125 26.757812 C 99.960938 25.382812 99.945312 25.234375 99.773438 24.726562 C 99.414062 23.671875 98.96875 23.242188 97.5625 22.585938 C 95.828125 21.773438 92.617188 20.867188 88.4375 20.007812 C 84.351562 19.164062 76.53125 18.367188 72.390625 18.359375 L 70.601562 18.359375 L 68.757812 17.273438 C 62.40625 13.546875 56.3125 10.367188 54.289062 9.726562 C 50.398438 8.5 41.804688 8.203125 31.695312 8.945312 L 30.226562 9.054688 L 29.859375 8.820312 C 29.140625 8.367188 28.117188 8.125 27.539062 8.273438 Z M 42.476562 10.703125 C 42.578125 11.054688 42.929688 13.085938 43.164062 14.726562 C 43.421875 16.492188 43.742188 18.9375 43.71875 18.960938 C 43.664062 19.015625 30.65625 18.648438 27.671875 18.507812 C 24.882812 18.382812 24.046875 18.070312 23.195312 16.828125 C 22.710938 16.117188 22.515625 15.070312 22.734375 14.28125 C 22.828125 13.96875 23.171875 13.703125 24.234375 13.125 C 27.117188 11.578125 30.476562 10.867188 36.875 10.46875 C 38.796875 10.351562 39.140625 10.34375 40.859375 10.34375 L 42.375 10.351562 Z M 47.546875 10.625 C 50.539062 10.90625 53.148438 11.296875 54.84375 11.710938 C 56.484375 12.117188 58.367188 12.984375 60.46875 14.304688 C 61.570312 14.992188 63.429688 16.328125 63.4375 16.421875 C 63.4375 16.460938 63.328125 16.484375 63.1875 16.484375 C 62.8125 16.484375 62.296875 16.773438 62.09375 17.09375 C 61.90625 17.398438 61.859375 17.976562 61.976562 18.570312 L 62.046875 18.90625 L 47.921875 18.90625 L 46.546875 14.6875 L 45.179688 10.46875 L 45.546875 10.46875 C 45.742188 10.46875 46.648438 10.539062 47.546875 10.625 Z M 47.546875 10.625 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:#202020;fill-opacity:1;" d="M 20.445312 25.585938 C 17.078125 26.226562 14.398438 29.023438 13.898438 32.421875 C 13.765625 33.335938 13.84375 34.703125 14.085938 35.625 C 14.96875 39.03125 17.96875 41.492188 21.484375 41.695312 C 25.445312 41.921875 28.976562 39.25 29.890625 35.34375 C 30.109375 34.429688 30.09375 32.625 29.859375 31.695312 C 29.125 28.742188 26.867188 26.460938 23.921875 25.695312 C 23.101562 25.484375 21.296875 25.429688 20.445312 25.585938 Z M 23.398438 28.007812 C 24.054688 28.171875 25.03125 28.671875 25.585938 29.117188 C 26.492188 29.851562 27.226562 31.007812 27.546875 32.1875 C 27.726562 32.867188 27.734375 34.21875 27.546875 34.960938 C 27.09375 36.8125 25.65625 38.390625 23.851562 39.015625 C 19.703125 40.46875 15.460938 36.851562 16.28125 32.546875 C 16.515625 31.359375 17.015625 30.40625 17.890625 29.53125 C 18.757812 28.671875 19.742188 28.140625 20.898438 27.921875 C 21.554688 27.796875 22.734375 27.835938 23.398438 28.007812 Z M 23.398438 28.007812 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 22.796875 29.9375 C 22.8125 30.640625 22.851562 31.242188 22.890625 31.28125 C 23.023438 31.414062 23.734375 30.828125 24.460938 29.984375 L 24.859375 29.539062 L 24.484375 29.296875 C 24.078125 29.039062 23.460938 28.789062 23.039062 28.710938 L 22.773438 28.664062 Z M 22.796875 29.9375 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 20.242188 28.90625 C 19.757812 29.078125 18.9375 29.546875 18.960938 29.640625 C 18.984375 29.742188 20.8125 31.328125 20.90625 31.328125 C 20.960938 31.328125 21.023438 31.273438 21.046875 31.203125 C 21.109375 31.046875 21.109375 30.210938 21.039062 29.390625 C 20.984375 28.648438 20.976562 28.640625 20.242188 28.90625 Z M 20.242188 28.90625 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 25.070312 31.601562 C 24.625 32.101562 24.25 32.5625 24.234375 32.625 C 24.1875 32.820312 24.59375 32.898438 25.460938 32.851562 C 25.914062 32.828125 26.40625 32.789062 26.546875 32.765625 C 26.804688 32.726562 26.8125 32.71875 26.757812 32.4375 C 26.703125 32.09375 26.257812 31.132812 26.039062 30.867188 L 25.890625 30.679688 Z M 25.070312 31.601562 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 17.65625 31.179688 C 17.414062 31.523438 17.125 32.21875 17.054688 32.632812 L 17.007812 32.890625 L 18.21875 32.890625 C 19.507812 32.890625 19.789062 32.820312 19.632812 32.546875 C 19.53125 32.359375 18.039062 30.859375 17.960938 30.859375 C 17.921875 30.859375 17.789062 31 17.65625 31.179688 Z M 17.65625 31.179688 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 21.765625 31.609375 C 21.484375 31.882812 21.765625 32.289062 22.109375 32.109375 C 22.3125 32 22.3125 31.671875 22.117188 31.5625 C 21.921875 31.460938 21.90625 31.460938 21.765625 31.609375 Z M 21.765625 31.609375 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 21.492188 32.921875 C 21.046875 33.171875 20.960938 33.789062 21.320312 34.148438 C 21.65625 34.476562 22.109375 34.484375 22.4375 34.15625 C 22.765625 33.828125 22.757812 33.375 22.429688 33.039062 C 22.171875 32.789062 21.820312 32.742188 21.492188 32.921875 Z M 21.492188 32.921875 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 20 33.3125 C 19.851562 33.492188 19.9375 33.789062 20.140625 33.8125 C 20.484375 33.867188 20.664062 33.5625 20.421875 33.328125 C 20.273438 33.171875 20.125 33.171875 20 33.3125 Z M 20 33.3125 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 23.453125 33.40625 C 23.242188 33.554688 23.234375 33.6875 23.429688 33.859375 C 23.625 34.039062 23.90625 33.90625 23.90625 33.632812 C 23.90625 33.375 23.671875 33.25 23.453125 33.40625 Z M 23.453125 33.40625 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 17.539062 34.429688 C 16.9375 34.476562 16.945312 34.46875 17.078125 34.9375 C 17.203125 35.367188 17.554688 36.078125 17.796875 36.390625 L 17.9375 36.570312 L 18.742188 35.617188 C 19.1875 35.09375 19.554688 34.609375 19.5625 34.539062 C 19.570312 34.429688 19.453125 34.414062 18.75 34.40625 C 18.296875 34.40625 17.757812 34.414062 17.539062 34.429688 Z M 17.539062 34.429688 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 24.726562 34.523438 C 24.382812 34.554688 24.25 34.601562 24.234375 34.695312 C 24.210938 34.820312 25.875 36.484375 26.015625 36.484375 C 26.1875 36.484375 26.6875 35.382812 26.835938 34.703125 L 26.890625 34.453125 L 26.039062 34.46875 C 25.578125 34.476562 24.984375 34.5 24.726562 34.523438 Z M 24.726562 34.523438 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 21.6875 35.046875 C 21.539062 35.1875 21.539062 35.203125 21.640625 35.398438 C 21.6875 35.484375 21.804688 35.546875 21.914062 35.546875 C 22.070312 35.546875 22.265625 35.359375 22.265625 35.203125 C 22.265625 35.125 22.015625 34.921875 21.914062 34.921875 C 21.859375 34.921875 21.75 34.976562 21.6875 35.046875 Z M 21.6875 35.046875 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 20.226562 36.382812 C 19.554688 37.085938 19.140625 37.5625 19.140625 37.648438 C 19.140625 37.84375 20.539062 38.4375 20.984375 38.4375 L 21.195312 38.4375 L 21.140625 37.320312 C 21.070312 36.023438 21.039062 35.859375 20.867188 35.859375 C 20.796875 35.859375 20.507812 36.09375 20.226562 36.382812 Z M 20.226562 36.382812 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 22.9375 35.929688 C 22.890625 36.007812 22.75 37.242188 22.710938 37.945312 C 22.6875 38.414062 22.695312 38.4375 22.859375 38.4375 C 23.476562 38.4375 24.90625 37.90625 24.796875 37.71875 C 24.757812 37.664062 24.382812 37.21875 23.953125 36.734375 C 23.226562 35.914062 23.039062 35.765625 22.9375 35.929688 Z M 22.9375 35.929688 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:#202020;fill-opacity:1;" d="M 83.773438 25.585938 C 81.289062 26.039062 79.109375 27.664062 77.96875 29.921875 C 76.226562 33.367188 77.203125 37.703125 80.226562 39.984375 C 81.101562 40.640625 81.695312 40.960938 82.65625 41.28125 C 84.796875 41.992188 86.914062 41.828125 88.921875 40.804688 C 93.234375 38.601562 94.664062 33.125 91.984375 29.085938 C 90.226562 26.4375 86.898438 25.015625 83.773438 25.585938 Z M 86.78125 28.046875 C 89.5 28.8125 91.304688 31.507812 90.9375 34.265625 C 90.414062 38.234375 86.28125 40.484375 82.695312 38.75 C 80.828125 37.84375 79.601562 36 79.476562 33.90625 C 79.320312 31.289062 80.976562 28.90625 83.507812 28.085938 C 84.460938 27.773438 85.765625 27.757812 86.78125 28.046875 Z M 86.78125 28.046875 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 86.070312 29.9375 C 86.09375 30.640625 86.140625 31.242188 86.179688 31.28125 C 86.28125 31.390625 86.59375 31.140625 87.390625 30.328125 L 88.132812 29.570312 L 87.953125 29.429688 C 87.5625 29.117188 86.476562 28.671875 86.117188 28.671875 C 86.039062 28.671875 86.03125 28.929688 86.070312 29.9375 Z M 86.070312 29.9375 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 83.632812 28.859375 C 83.242188 28.984375 82.59375 29.3125 82.359375 29.5 L 82.179688 29.648438 L 83.125 30.484375 C 83.648438 30.953125 84.125 31.328125 84.179688 31.328125 C 84.359375 31.328125 84.390625 31.023438 84.335938 29.875 C 84.273438 28.609375 84.304688 28.648438 83.632812 28.859375 Z M 83.632812 28.859375 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 88.335938 31.609375 C 87.875 32.117188 87.5 32.59375 87.5 32.671875 C 87.5 32.757812 87.585938 32.8125 87.796875 32.84375 C 88.140625 32.898438 89.96875 32.789062 90.054688 32.710938 C 90.171875 32.585938 89.65625 31.28125 89.320312 30.867188 L 89.171875 30.679688 Z M 88.335938 31.609375 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 80.953125 31.148438 C 80.648438 31.632812 80.40625 32.195312 80.34375 32.585938 L 80.289062 32.890625 L 81.476562 32.890625 C 82.148438 32.890625 82.734375 32.851562 82.820312 32.8125 C 82.953125 32.734375 82.960938 32.710938 82.859375 32.515625 C 82.796875 32.398438 82.398438 31.960938 81.96875 31.539062 L 81.195312 30.765625 Z M 80.953125 31.148438 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 85.0625 31.570312 C 84.875 31.679688 84.882812 32.007812 85.078125 32.109375 C 85.421875 32.289062 85.703125 31.882812 85.421875 31.609375 C 85.28125 31.460938 85.242188 31.460938 85.0625 31.570312 Z M 85.0625 31.570312 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 84.773438 32.914062 C 84.390625 33.140625 84.257812 33.703125 84.5 34.054688 C 84.570312 34.15625 84.75 34.28125 84.890625 34.34375 C 85.117188 34.4375 85.195312 34.4375 85.421875 34.34375 C 86.195312 34.023438 86.085938 32.9375 85.273438 32.84375 C 85.085938 32.820312 84.882812 32.851562 84.773438 32.914062 Z M 84.773438 32.914062 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 83.28125 33.3125 C 83.132812 33.492188 83.21875 33.789062 83.421875 33.8125 C 83.765625 33.867188 83.945312 33.5625 83.703125 33.328125 C 83.554688 33.171875 83.40625 33.171875 83.28125 33.3125 Z M 83.28125 33.3125 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 86.6875 33.40625 C 86.617188 33.46875 86.5625 33.578125 86.5625 33.632812 C 86.5625 33.734375 86.765625 33.984375 86.84375 33.984375 C 87 33.984375 87.1875 33.789062 87.1875 33.632812 C 87.1875 33.523438 87.125 33.40625 87.039062 33.359375 C 86.84375 33.257812 86.828125 33.257812 86.6875 33.40625 Z M 86.6875 33.40625 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 80.742188 34.445312 C 80.273438 34.492188 80.273438 34.492188 80.296875 34.726562 C 80.367188 35.265625 81.109375 36.664062 81.25 36.515625 C 81.695312 36.039062 82.890625 34.5625 82.867188 34.5 C 82.835938 34.40625 81.492188 34.367188 80.742188 34.445312 Z M 80.742188 34.445312 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 88.023438 34.507812 C 87.492188 34.546875 87.40625 34.65625 87.65625 34.976562 C 87.835938 35.21875 89.21875 36.484375 89.296875 36.484375 C 89.320312 36.484375 89.453125 36.296875 89.585938 36.070312 C 89.8125 35.695312 89.992188 35.203125 90.109375 34.664062 L 90.15625 34.453125 L 89.320312 34.46875 C 88.851562 34.476562 88.273438 34.492188 88.023438 34.507812 Z M 88.023438 34.507812 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 84.921875 35.078125 C 84.796875 35.320312 84.953125 35.5625 85.21875 35.53125 C 85.382812 35.515625 85.4375 35.460938 85.453125 35.28125 C 85.492188 34.929688 85.085938 34.773438 84.921875 35.078125 Z M 84.921875 35.078125 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 83.210938 36.695312 C 82.773438 37.15625 82.421875 37.578125 82.421875 37.632812 C 82.421875 37.851562 83.765625 38.4375 84.273438 38.4375 L 84.476562 38.4375 L 84.421875 37.476562 C 84.34375 36.078125 84.304688 35.859375 84.140625 35.859375 C 84.0625 35.859375 83.648438 36.234375 83.210938 36.695312 Z M 83.210938 36.695312 "/>
  <path style=" stroke:none;fill-rule:nonzero;fill:${color};fill-opacity:1;" d="M 86.210938 35.929688 C 86.15625 36.023438 86.03125 37.054688 85.984375 37.828125 C 85.953125 38.429688 85.953125 38.4375 86.132812 38.4375 C 86.484375 38.4375 87.148438 38.265625 87.640625 38.039062 L 88.140625 37.8125 L 87.992188 37.632812 C 87.484375 36.992188 86.445312 35.859375 86.359375 35.859375 C 86.304688 35.859375 86.242188 35.890625 86.210938 35.929688 Z M 86.210938 35.929688 "/>
  </g>
  </svg>`;
}