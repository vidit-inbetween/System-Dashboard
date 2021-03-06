module.exports = [
  {
    id: "1",
    label: 'Application Health',
    status: 'InProgress',
    childNodes: [],
    transaction: {pass: 10, fail: 20, inProgress: 30},
    cpu: "11%",
    memory: "42%",
    disk: "10%",
    ping: "Ok"
  },
  {
    id: "2",
    label: 'Neo4j Cluster',
    status: 'Fail',
    isChildVisible: false,
    childNodes: [
      {
        id: "2-1",
        label: 'Node-1',
        cpu: "23%",
        memory: "21%",
        disk: "54%",
        ping: "Ok",
        status: 'InProgress'
      },
      {
        id: "2-2",
        label: 'Node-2',
        cpu: "11%",
        memory: "21%",
        disk: "57%",
        ping: "Ok",
        status: 'Fail'
      }
    ],
    transaction: {pass: 20, fail: 60, inProgress: 30},
    cpu: "19%",
    memory: "21%",
    disk: "55%",
    ping: "Ok"
  },
  {
    id: "3",
    label: 'Elastic Cluster',
    status: 'Fail',
    isChildVisible: false,
    childNodes: [
      {
        id: "3-1",
        label: 'Node-1',
        cpu: "6%",
        memory: "54%",
        disk: "10%",
        ping: "Ok",
        status: 'InProgress'
      },
      {
        id: "3-2",
        label: 'Node-2',
        cpu: "15%",
        memory: "72%",
        disk: "31%",
        ping: "Ok"
      }
    ],
    transaction: {pass: 30, fail: 50, inProgress: 30},
    cpu: "12%",
    memory: "62%",
    disk: "21%",
    ping: "Ok"
  },
  {
    id: "4",
    label: 'Cassandra',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 40, fail: 40, inProgress: 30},
    cpu: "13%",
    memory: "42%",
    disk: "59%",
    ping: "Ok"
  },
  {
    id: "5",
    label: 'Tomcat',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 50, fail: 30, inProgress: 30},
    cpu: "12%",
    memory: "25%",
    disk: "10%",
    ping: "Ok"
  },
  {
    id: "6",
    label: 'Pentaho',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 60, fail: 20, inProgress: 30},
    cpu: "1%",
    memory: "11%",
    disk: "21%",
    ping: "Ok"
  },
  {
    id: "7",
    label: 'Swift',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 70, fail: 10, inProgress: 30},
    cpu: "45%",
    memory: "84%",
    disk: "70%",
    ping: "Ok"
  },
  {
    id: "8",
    label: 'Oracle',
    status: 'Fail',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 80, fail: 90, inProgress: 30},
    cpu: "10%",
    memory: "57%",
    disk: "10%",
    ping: "Ok"
  }
];