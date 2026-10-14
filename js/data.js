var APP_DATA = {
  scenes: [
    {
      id: "0-above-main-entrance",
      name: "Above Main Entrance",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        yaw: -1.1546209371954,
        pitch: 1.082844465364584,
        fov: 1.3474042771833745,
      },
      linkHotspots: [
        {
          yaw: -2.4732599314666412,
          pitch: 1.3663111741329246,
          rotation: 1.5707963267948966,
          target: "3-main-entrance",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-after-main-entrancee",
      name: "After Main Entrancee",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "2-before-main-entrance",
      name: "Before Main Entrance",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.51828240184832,
          pitch: 0.19674167480600424,
          rotation: 1.5707963267948966,
          target: "3-main-entrance",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.3195295092112662,
          pitch: -0.39728749202069835,
          title: "Bedore's Gallery",
          text: "soon...",
        },
      ],
    },
    {
      id: "3-main-entrance",
      name: "Main Entrance",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
      ],
      faceSize: 1024,
      initialViewParameters: {
        yaw: 0.332868819284867,
        pitch: -0.16794197772184738,
        fov: 1.3474042771833745,
      },
      linkHotspots: [
        {
          yaw: -0.19041564195882188,
          pitch: -1.2877623488872754,
          rotation: 0,
          target: "0-above-main-entrance",
        },
        {
          yaw: 1.5997674456597668,
          pitch: -0.36232842532072773,
          rotation: 1.5707963267948966,
          target: "1-after-main-entrancee",
        },
        {
          yaw: -1.8922074722381286,
          pitch: -0.39657164803740486,
          rotation: 4.71238898038469,
          target: "2-before-main-entrance",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.609716044733414,
          pitch: -0.0806197865078424,
          title: "Grand Opening",
          text: "soon...",
        },
      ],
    },
  ],
  name: "Bedore's Gallery Main Entrance",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: true,
  },
};
