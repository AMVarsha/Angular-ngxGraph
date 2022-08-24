import { Edge, Node, ClusterNode } from "@swimlane/ngx-graph";


export const nodes = [
  {
    id: "wan1",
    label: "WAN1",
    img: "assets/images/LAN.jpg",
    nodeWidth: 80
  },
  {
    id: "wan2",
    label: "WAN",
    img: "assets/images/WAN.jpg",
    nodeWidth: 100
  },
  {
    id: "chiefnet",
    label: "CN",
    img: "assets/images/CN.jpg",
    nodeWidth: 180
  },
  {
    id: "lan1",
    label: "LAN1",
    img: "assets/images/LAN.jpg",
    nodeWidth: 100
  },
  {
    id: "lan2",
    label: "LAN2",
    img: "assets/images/WAN.jpg",
    nodeWidth: 120
  },
  {
    id: "cn",
    label: "WI-FI",
    img: "assets/images/WIFI.jpg",
    nodeWidth: 180
  },
]


export const links = [
  {
    id: "wan1",
    source: "wan1",
    target: "chiefnet",
    label: "Connected",
    level: 0,
    thickness: 2,
    color: '#8CE22F'
  },
  {
    id: "chiefnet",
    source: "wan2",
    target: "chiefnet",
    label: "Not Connected",
    level: 0,
    thickness: 2,
    color: '#FA8073'
  },
  {
    id: "p5p6",
    source: "chiefnet",
    target: "lan1",
    label: "Connected",
    level: 0,
    thickness: 2,
    color: '#8CE22F'
  },
  {
    id: "p5p9",
    source: "chiefnet",
    target: "lan2",
    label: "Not Connected",

    level: 0,
    thickness: 2,
    color: '#FA8073'
  },
  {
    id: "cn",
    source: "cn",
    target: "chiefnet",
    label: "WI-FI",
    level: 0,
    thickness: 2,
    color: '#FA8073',
    line: 'dashed'
  },
]


export const clusters = [
  {
    id: 1,
    label: 'flight 1',
    childNodeIds: ['wan1', 'wan2', 'chiefnet', 'lan1', 'lan2']
  },
]
