module.exports = [
  {
    id: "1",
    label: 'Application Health',
    status: 'InProgress',
    childNodes: [],
    transaction: {pass: 10, fail: 20, inProgress: 30}
  },
  {
    id: "2",
    label: 'Neo4j Cluster',
    status: 'Fail',
    isChildVisible: false,
    childNodes: [
      {label: 'node1', status: 'InProgress'},
      {label: 'node2', status: 'Fail'}
    ],
    transaction: {pass: 20, fail: 60, inProgress: 30}
  },
  {
    id: "3",
    label: 'Elastic Cluster',
    status: 'Fail',
    isChildVisible: false,
    childNodes: [
      {label: 'node1', status: 'InProgress'},
      {label: 'node2', status: 'Fail'}
    ],
    transaction: {pass: 30, fail: 50, inProgress: 30}
  },
  {
    id: "4",
    label: 'Cassandra',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [
      {label: 'node1', status: 'InProgress'},
      {label: 'node2', status: 'Pass'}],
    transaction: {pass: 40, fail: 40, inProgress: 30}
  },
  {
    id: "5",
    label: 'Tomcat',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [
      {label: 'node1', status: 'Pass'},
      {label: 'node2', status: 'Pass'}
    ],
    transaction: {pass: 50, fail: 30, inProgress: 30}
  },
  {
    id: "6",
    label: 'Pentaho',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [
      {label: 'node1', status: 'Pass'},
      {label: 'node2', status: 'InProgress'}
    ],
    transaction: {pass: 60, fail: 20, inProgress: 30}
  },
  {
    id: "7",
    label: 'Swift',
    status: 'Pass',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 70, fail: 10, inProgress: 30}
  },
  {
    id: "8",
    label: 'Oracle',
    status: 'Fail',
    isChildVisible: false,
    childNodes: [],
    transaction: {pass: 80, fail: 90, inProgress: 30}
  }
]
;