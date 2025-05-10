var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.5691446144590326,
          "pitch": 0.1832361057447418,
          "rotation": 11.780972450961727,
          "target": "1-parking"
        },
        {
          "yaw": 0.009417384847498766,
          "pitch": -0.02782228688358046,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parking",
      "name": "PARKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.17459864918751045,
          "pitch": -0.011431148697358395,
          "rotation": 5.497787143782138,
          "target": "2-living"
        },
        {
          "yaw": -2.5211340225077468,
          "pitch": 0.15173088128432788,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.24965896385579,
          "pitch": 0.3028937379363903,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.015037878294656082,
        "pitch": 0.03639658385169042,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.8540147577103099,
          "pitch": 0.20530054154511213,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": 0.7919636033293536,
          "pitch": 0.1873396597189263,
          "rotation": 0,
          "target": "6-mbedroom"
        },
        {
          "yaw": 1.8306825891927208,
          "pitch": 0.2230146984408492,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 2.8534787519265326,
          "pitch": 0.4309075899836614,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -1.8879071816284316,
          "pitch": 0.3099401263269712,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": -0.012572161597383058,
          "pitch": 0.17101449369894972,
          "rotation": 0,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -1.3294751907542341,
          "pitch": 0.1048783757033771,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -2.410996626112258,
          "pitch": 0.09463408926921701,
          "rotation": 0,
          "target": "6-mbedroom"
        },
        {
          "yaw": -3.1218668096051587,
          "pitch": 0.01474759599336295,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": 2.2285446908555,
          "pitch": 0.11686396311646163,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": 1.2839496652204314,
          "pitch": 0.19361777697095306,
          "rotation": 0,
          "target": "4-kbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kbedroom",
      "name": "K.BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9515057272120142
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": -1.9413611372096113,
          "pitch": 0.1484960824789212,
          "rotation": 4.71238898038469,
          "target": "5-ktoilet"
        },
        {
          "yaw": 2.279801432379158,
          "pitch": 0.21066608705971923,
          "rotation": 13.351768777756625,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ktoilet",
      "name": "K.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "5-ktoilet"
        },
        {
          "yaw": 3.020825374081573,
          "pitch": 0.16707522149993892,
          "rotation": 0.7853981633974483,
          "target": "4-kbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mbedroom",
      "name": "M.BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07249829200592117,
        "pitch": -0.06122382003877469,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.07249829200592117,
          "pitch": -0.06122382003877469,
          "rotation": 0,
          "target": "6-mbedroom"
        },
        {
          "yaw": -2.098599643299714,
          "pitch": 0.22380596316981816,
          "rotation": 1.5707963267948966,
          "target": "2-living"
        },
        {
          "yaw": -2.253375244817617,
          "pitch": 0.07453670030401227,
          "rotation": 5.497787143782138,
          "target": "3-dining"
        },
        {
          "yaw": 2.7661013377398973,
          "pitch": 0.19933060938927483,
          "rotation": 0.7853981633974483,
          "target": "7-mtoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-mtoilet",
      "name": "M.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1168064628689578,
        "pitch": -0.07235542368218262,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.1168064628689578,
          "pitch": -0.07235542368218262,
          "rotation": 0,
          "target": "5-ktoilet"
        },
        {
          "yaw": 2.106117676930051,
          "pitch": 0.19944416548346133,
          "rotation": 4.71238898038469,
          "target": "5-ktoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.060415243338267643,
        "pitch": -0.0018552672739016174,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.060415243338267643,
          "pitch": -0.0018552672739016174,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 1.4951943150191003,
          "pitch": 0.21504549997887779,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.5976469746345972,
          "pitch": 0.053573271898962105,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": 1.8264491261544027,
          "pitch": 0.17383884022676632,
          "rotation": 0.7853981633974483,
          "target": "2-living"
        },
        {
          "yaw": 1.8407420137685033,
          "pitch": 0.06260719964844697,
          "rotation": 0.7853981633974483,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
