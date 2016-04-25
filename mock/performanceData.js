module.exports = {
  "took": 3,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 38,
    "max_score": 3.3795462,
    "hits": [
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "4ad2a8de-3319-4f12-91db-7987230ba3c6",
        "_score": 3.3795462,
        "_source": {
          "id": "4ad2a8de-3319-4f12-91db-7987230ba3c6",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338028472,
            "endTime": 1461338028494,
            "turnAroundTime": 22,
            "executionSequence": 50,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338018183,
              "endTime": 1461338018491,
              "turnAroundTime": 308,
              "executionSequence": 49,
              "caller": 48,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338028472,
              "endTime": 1461338028494,
              "turnAroundTime": 22,
              "executionSequence": 51,
              "caller": 50,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "48dc4e34-3949-4b84-a133-246a041fe064",
        "_score": 3.3795462,
        "_source": {
          "id": "48dc4e34-3949-4b84-a133-246a041fe064",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338045027,
            "endTime": 1461338045055,
            "turnAroundTime": 28,
            "executionSequence": 76,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338042876,
              "endTime": 1461338043067,
              "turnAroundTime": 191,
              "executionSequence": 75,
              "caller": 74,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338045028,
              "endTime": 1461338045055,
              "turnAroundTime": 27,
              "executionSequence": 77,
              "caller": 76,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "8b6c1d41-d3b9-45f3-8a0a-80429b6c04f9",
        "_score": 3.3795462,
        "_source": {
          "id": "8b6c1d41-d3b9-45f3-8a0a-80429b6c04f9",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338085996,
            "endTime": 1461338086001,
            "turnAroundTime": 5,
            "executionSequence": 107,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338084517,
              "endTime": 1461338085220,
              "turnAroundTime": 703,
              "executionSequence": 106,
              "caller": 105,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338085996,
              "endTime": 1461338086001,
              "turnAroundTime": 5,
              "executionSequence": 108,
              "caller": 107,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "29d99a62-ed32-42f5-9c30-54cf82ee1e30",
        "_score": 3.3795462,
        "_source": {
          "id": "29d99a62-ed32-42f5-9c30-54cf82ee1e30",
          "interactor": {
            "useCase": "SaveKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.SaveKlassInstance",
            "methodName": "execute",
            "startTime": 1461338100567,
            "endTime": 1461338100742,
            "turnAroundTime": 175,
            "executionSequence": 117,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338087273,
              "endTime": 1461338087283,
              "turnAroundTime": 10,
              "executionSequence": 116,
              "caller": 113,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "5a1e5c50-a610-4547-a5b7-0bd38062c13c",
        "_score": 2.9459102,
        "_source": {
          "id": "5a1e5c50-a610-4547-a5b7-0bd38062c13c",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338017046,
            "endTime": 1461338017062,
            "turnAroundTime": 16,
            "executionSequence": 43,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461337743656,
              "endTime": 1461337743905,
              "turnAroundTime": 249,
              "executionSequence": 42,
              "caller": 41,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338017046,
              "endTime": 1461338017062,
              "turnAroundTime": 16,
              "executionSequence": 44,
              "caller": 43,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "2d7c733d-c7ac-4070-9433-736986ad218e",
        "_score": 2.9459102,
        "_source": {
          "id": "2d7c733d-c7ac-4070-9433-736986ad218e",
          "interactor": {
            "useCase": "GetAllUsers",
            "klassName": "com.cs.config.interactor.usecase.user.GetAllUsers",
            "methodName": "execute",
            "startTime": 1461338034239,
            "endTime": 1461338034252,
            "turnAroundTime": 13,
            "executionSequence": 66,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338032783,
              "endTime": 1461338032986,
              "turnAroundTime": 203,
              "executionSequence": 63,
              "caller": 62,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUsersStrategy",
              "klassName": "com.cs.config.strategy.neo4j.user.Neo4jGetUsersStrategy",
              "methodName": "execute",
              "startTime": 1461338034239,
              "endTime": 1461338034251,
              "turnAroundTime": 12,
              "executionSequence": 67,
              "caller": 66,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "f328d2fa-58fd-4fce-be31-b96ba7d6d073",
        "_score": 2.9459102,
        "_source": {
          "id": "f328d2fa-58fd-4fce-be31-b96ba7d6d073",
          "interactor": {
            "useCase": "GetAllUserGroups",
            "klassName": "com.cs.config.interactor.usecase.usergroup.GetAllUserGroups",
            "methodName": "execute",
            "startTime": 1461338045445,
            "endTime": 1461338045454,
            "turnAroundTime": 9,
            "executionSequence": 80,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338042876,
              "endTime": 1461338043067,
              "turnAroundTime": 191,
              "executionSequence": 75,
              "caller": 74,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUserGroupsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.usergroup.Neo4jGetUserGroupsStrategy",
              "methodName": "execute",
              "startTime": 1461338045445,
              "endTime": 1461338045454,
              "turnAroundTime": 9,
              "executionSequence": 81,
              "caller": 80,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "85ab954a-c5f3-484f-b0d5-fe763ee4869e",
        "_score": 2.9459102,
        "_source": {
          "id": "85ab954a-c5f3-484f-b0d5-fe763ee4869e",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338083293,
            "endTime": 1461338083333,
            "turnAroundTime": 40,
            "executionSequence": 100,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338079778,
              "endTime": 1461338079963,
              "turnAroundTime": 185,
              "executionSequence": 99,
              "caller": 98,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338083293,
              "endTime": 1461338083333,
              "turnAroundTime": 40,
              "executionSequence": 101,
              "caller": 100,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "f1001b73-3979-4bf0-875e-f7dafdb375db",
        "_score": 2.9459102,
        "_source": {
          "id": "f1001b73-3979-4bf0-875e-f7dafdb375db",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338126476,
            "endTime": 1461338127515,
            "turnAroundTime": 1039,
            "executionSequence": 119,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338126477,
              "endTime": 1461338127514,
              "turnAroundTime": 1037,
              "executionSequence": 120,
              "caller": 119,
              "executionStatus": "failure"
            },
            "executionStatus": "failure"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "failure"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "097fc44e-06af-4a14-94fd-8e739b9695ff",
        "_score": 2.9459102,
        "_source": {
          "id": "097fc44e-06af-4a14-94fd-8e739b9695ff",
          "interactor": {
            "useCase": "GetKlassWithViewSettings",
            "klassName": "com.cs.config.interactor.usecase.klass.GetKlassWithViewSettings",
            "methodName": "execute",
            "startTime": 1461338083551,
            "endTime": 1461338083818,
            "turnAroundTime": 267,
            "executionSequence": 102,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338079778,
              "endTime": 1461338079963,
              "turnAroundTime": 185,
              "executionSequence": 99,
              "caller": 98,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338083809,
              "endTime": 1461338083818,
              "turnAroundTime": 9,
              "executionSequence": 104,
              "caller": 102,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "88f6ceaa-7916-4f50-8a28-090d17dbbb29",
        "_score": 2.9459102,
        "_source": {
          "id": "88f6ceaa-7916-4f50-8a28-090d17dbbb29",
          "interactor": {
            "useCase": "GetTag",
            "klassName": "com.cs.config.interactor.usecase.tag.GetTag",
            "methodName": "execute",
            "startTime": 1461338133137,
            "endTime": 1461338134152,
            "turnAroundTime": 1015,
            "executionSequence": 121,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetTagStrategy",
              "klassName": "com.cs.config.strategy.neo4j.tag.Neo4jGetTagStrategy",
              "methodName": "execute",
              "startTime": 1461338133138,
              "endTime": 1461338134152,
              "turnAroundTime": 1014,
              "executionSequence": 122,
              "caller": 121,
              "executionStatus": "failure"
            },
            "executionStatus": "failure"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "failure"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "b708e958-66e4-43ad-b3f5-bb6b28bda8ec",
        "_score": 2.9459102,
        "_source": {
          "id": "b708e958-66e4-43ad-b3f5-bb6b28bda8ec",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338138922,
            "endTime": 1461338139950,
            "turnAroundTime": 1028,
            "executionSequence": 137,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338138922,
              "endTime": 1461338139950,
              "turnAroundTime": 1028,
              "executionSequence": 138,
              "caller": 137,
              "executionStatus": "failure"
            },
            "executionStatus": "failure"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "failure"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "5b17fa7a-37e1-409d-bddc-93002126f857",
        "_score": 2.8908503,
        "_source": {
          "id": "5b17fa7a-37e1-409d-bddc-93002126f857",
          "interactor": {
            "useCase": "CreateKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.CreateKlassInstance",
            "methodName": "execute",
            "startTime": 1461338032783,
            "endTime": 1461338032986,
            "turnAroundTime": 203,
            "executionSequence": 62,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338032783,
              "endTime": 1461338032986,
              "turnAroundTime": 203,
              "executionSequence": 63,
              "caller": 62,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338032301,
              "endTime": 1461338032310,
              "turnAroundTime": 9,
              "executionSequence": 61,
              "caller": 59,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "464730d0-0936-4538-b5d4-f2d86caf9bfb",
        "_score": 2.8908503,
        "_source": {
          "id": "464730d0-0936-4538-b5d4-f2d86caf9bfb",
          "interactor": {
            "useCase": "SaveKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.SaveKlassInstance",
            "methodName": "execute",
            "startTime": 1461338042875,
            "endTime": 1461338043067,
            "turnAroundTime": 192,
            "executionSequence": 74,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338042876,
              "endTime": 1461338043067,
              "turnAroundTime": 191,
              "executionSequence": 75,
              "caller": 74,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338035134,
              "endTime": 1461338035144,
              "turnAroundTime": 10,
              "executionSequence": 73,
              "caller": 70,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "7b1a27f0-8b7c-4397-9a69-966e03a5bc7a",
        "_score": 2.8908503,
        "_source": {
          "id": "7b1a27f0-8b7c-4397-9a69-966e03a5bc7a",
          "interactor": {
            "useCase": "GetAllUsers",
            "klassName": "com.cs.config.interactor.usecase.user.GetAllUsers",
            "methodName": "execute",
            "startTime": 1461338045304,
            "endTime": 1461338045309,
            "turnAroundTime": 5,
            "executionSequence": 78,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338042876,
              "endTime": 1461338043067,
              "turnAroundTime": 191,
              "executionSequence": 75,
              "caller": 74,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUsersStrategy",
              "klassName": "com.cs.config.strategy.neo4j.user.Neo4jGetUsersStrategy",
              "methodName": "execute",
              "startTime": 1461338045304,
              "endTime": 1461338045309,
              "turnAroundTime": 5,
              "executionSequence": 79,
              "caller": 78,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "e00e0f87-db68-42f1-a2d6-108581a90571",
        "_score": 2.8908503,
        "_source": {
          "id": "e00e0f87-db68-42f1-a2d6-108581a90571",
          "interactor": {
            "useCase": "GetKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.GetKlassInstance",
            "methodName": "execute",
            "startTime": 1461338063739,
            "endTime": 1461338064140,
            "turnAroundTime": 401,
            "executionSequence": 94,
            "elasticStrategy": {
              "useCase": "ElasticGetKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338063739,
              "endTime": 1461338063757,
              "turnAroundTime": 18,
              "executionSequence": 95,
              "caller": 94,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338064130,
              "endTime": 1461338064140,
              "turnAroundTime": 10,
              "executionSequence": 97,
              "caller": 94,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "4bc9343a-769b-41a7-b207-cdfd9db9091d",
        "_score": 2.8908503,
        "_source": {
          "id": "4bc9343a-769b-41a7-b207-cdfd9db9091d",
          "interactor": {
            "useCase": "SaveKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.SaveKlassInstance",
            "methodName": "execute",
            "startTime": 1461338060189,
            "endTime": 1461338060410,
            "turnAroundTime": 221,
            "executionSequence": 86,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338060190,
              "endTime": 1461338060410,
              "turnAroundTime": 220,
              "executionSequence": 87,
              "caller": 86,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338046007,
              "endTime": 1461338046018,
              "turnAroundTime": 11,
              "executionSequence": 85,
              "caller": 82,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "fca8d463-531b-4a7c-ae27-700798ec7016",
        "_score": 2.8908503,
        "_source": {
          "id": "fca8d463-531b-4a7c-ae27-700798ec7016",
          "interactor": {
            "useCase": "GetKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.GetKlassInstance",
            "methodName": "execute",
            "startTime": 1461338086926,
            "endTime": 1461338087283,
            "turnAroundTime": 357,
            "executionSequence": 113,
            "elasticStrategy": {
              "useCase": "ElasticGetKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338086926,
              "endTime": 1461338086939,
              "turnAroundTime": 13,
              "executionSequence": 114,
              "caller": 113,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338087273,
              "endTime": 1461338087283,
              "turnAroundTime": 10,
              "executionSequence": 116,
              "caller": 113,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "b7e843e7-02f8-40df-a220-cb74d8b54d3c",
        "_score": 2.8908503,
        "_source": {
          "id": "b7e843e7-02f8-40df-a220-cb74d8b54d3c",
          "interactor": {
            "useCase": "GetAllUserGroups",
            "klassName": "com.cs.config.interactor.usecase.usergroup.GetAllUserGroups",
            "methodName": "execute",
            "startTime": 1461338086597,
            "endTime": 1461338086605,
            "turnAroundTime": 8,
            "executionSequence": 111,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338084517,
              "endTime": 1461338085220,
              "turnAroundTime": 703,
              "executionSequence": 106,
              "caller": 105,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUserGroupsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.usergroup.Neo4jGetUserGroupsStrategy",
              "methodName": "execute",
              "startTime": 1461338086597,
              "endTime": 1461338086605,
              "turnAroundTime": 8,
              "executionSequence": 112,
              "caller": 111,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "b1a47b73-a091-4d03-97f2-47a4d602759b",
        "_score": 2.6677067,
        "_source": {
          "id": "b1a47b73-a091-4d03-97f2-47a4d602759b",
          "interactor": {
            "useCase": "GetKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.GetKlassInstance",
            "methodName": "execute",
            "startTime": 1461338034707,
            "endTime": 1461338035144,
            "turnAroundTime": 437,
            "executionSequence": 70,
            "elasticStrategy": {
              "useCase": "ElasticGetKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338034707,
              "endTime": 1461338034726,
              "turnAroundTime": 19,
              "executionSequence": 71,
              "caller": 70,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338035134,
              "endTime": 1461338035144,
              "turnAroundTime": 10,
              "executionSequence": 73,
              "caller": 70,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "765dbe0a-e338-4fc8-9ffb-56da5852a710",
        "_score": 2.6677067,
        "_source": {
          "id": "765dbe0a-e338-4fc8-9ffb-56da5852a710",
          "interactor": {
            "useCase": "CreateKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.CreateKlassInstance",
            "methodName": "execute",
            "startTime": 1461338018183,
            "endTime": 1461338018491,
            "turnAroundTime": 308,
            "executionSequence": 48,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338018183,
              "endTime": 1461338018491,
              "turnAroundTime": 308,
              "executionSequence": 49,
              "caller": 48,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338017706,
              "endTime": 1461338017714,
              "turnAroundTime": 8,
              "executionSequence": 47,
              "caller": 45,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "5d1c2cee-24a2-469f-af5d-65211544d932",
        "_score": 2.6677067,
        "_source": {
          "id": "5d1c2cee-24a2-469f-af5d-65211544d932",
          "interactor": {
            "useCase": "GetKlassWithViewSettings",
            "klassName": "com.cs.config.interactor.usecase.klass.GetKlassWithViewSettings",
            "methodName": "execute",
            "startTime": 1461338028598,
            "endTime": 1461338028936,
            "turnAroundTime": 338,
            "executionSequence": 52,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338018183,
              "endTime": 1461338018491,
              "turnAroundTime": 308,
              "executionSequence": 49,
              "caller": 48,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338028927,
              "endTime": 1461338028936,
              "turnAroundTime": 9,
              "executionSequence": 54,
              "caller": 52,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "87e1756f-743c-4b3a-9f66-78002c79fbd7",
        "_score": 2.6677067,
        "_source": {
          "id": "87e1756f-743c-4b3a-9f66-78002c79fbd7",
          "interactor": {
            "useCase": "GetKlassWithViewSettings",
            "klassName": "com.cs.config.interactor.usecase.klass.GetKlassWithViewSettings",
            "methodName": "execute",
            "startTime": 1461338017382,
            "endTime": 1461338017714,
            "turnAroundTime": 332,
            "executionSequence": 45,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461337743656,
              "endTime": 1461337743905,
              "turnAroundTime": 249,
              "executionSequence": 42,
              "caller": 41,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338017706,
              "endTime": 1461338017714,
              "turnAroundTime": 8,
              "executionSequence": 47,
              "caller": 45,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "2ffd6997-b0e2-468d-bfe9-69f3375327d1",
        "_score": 2.6677067,
        "_source": {
          "id": "2ffd6997-b0e2-468d-bfe9-69f3375327d1",
          "interactor": {
            "useCase": "GetAllUsers",
            "klassName": "com.cs.config.interactor.usecase.user.GetAllUsers",
            "methodName": "execute",
            "startTime": 1461338063471,
            "endTime": 1461338063481,
            "turnAroundTime": 10,
            "executionSequence": 90,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338060190,
              "endTime": 1461338060410,
              "turnAroundTime": 220,
              "executionSequence": 87,
              "caller": 86,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUsersStrategy",
              "klassName": "com.cs.config.strategy.neo4j.user.Neo4jGetUsersStrategy",
              "methodName": "execute",
              "startTime": 1461338063471,
              "endTime": 1461338063481,
              "turnAroundTime": 10,
              "executionSequence": 91,
              "caller": 90,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "19824e0b-f817-41bb-87f6-2ef9fd204cd9",
        "_score": 2.6677067,
        "_source": {
          "id": "19824e0b-f817-41bb-87f6-2ef9fd204cd9",
          "interactor": {
            "useCase": "GetAllUserGroups",
            "klassName": "com.cs.config.interactor.usecase.usergroup.GetAllUserGroups",
            "methodName": "execute",
            "startTime": 1461338063581,
            "endTime": 1461338063589,
            "turnAroundTime": 8,
            "executionSequence": 92,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338060190,
              "endTime": 1461338060410,
              "turnAroundTime": 220,
              "executionSequence": 87,
              "caller": 86,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUserGroupsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.usergroup.Neo4jGetUserGroupsStrategy",
              "methodName": "execute",
              "startTime": 1461338063581,
              "endTime": 1461338063589,
              "turnAroundTime": 8,
              "executionSequence": 93,
              "caller": 92,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "4fb99bd5-328a-4221-b429-ba13b0c80c15",
        "_score": 2.6677067,
        "_source": {
          "id": "4fb99bd5-328a-4221-b429-ba13b0c80c15",
          "interactor": {
            "useCase": "SaveKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.SaveKlassInstance",
            "methodName": "execute",
            "startTime": 1461338079778,
            "endTime": 1461338079963,
            "turnAroundTime": 185,
            "executionSequence": 98,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338079778,
              "endTime": 1461338079963,
              "turnAroundTime": 185,
              "executionSequence": 99,
              "caller": 98,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338064130,
              "endTime": 1461338064140,
              "turnAroundTime": 10,
              "executionSequence": 97,
              "caller": 94,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "c218e6b1-c386-4543-92b1-8a8dae3335fe",
        "_score": 2.6677067,
        "_source": {
          "id": "c218e6b1-c386-4543-92b1-8a8dae3335fe",
          "interactor": {
            "useCase": "CreateKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.CreateKlassInstance",
            "methodName": "execute",
            "startTime": 1461338084517,
            "endTime": 1461338085220,
            "turnAroundTime": 703,
            "executionSequence": 105,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338084517,
              "endTime": 1461338085220,
              "turnAroundTime": 703,
              "executionSequence": 106,
              "caller": 105,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338083809,
              "endTime": 1461338083818,
              "turnAroundTime": 9,
              "executionSequence": 104,
              "caller": 102,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "269e03dd-0806-4eb3-b49a-ceb3dc86357d",
        "_score": 2.6677067,
        "_source": {
          "id": "269e03dd-0806-4eb3-b49a-ceb3dc86357d",
          "interactor": {
            "useCase": "GetAllAttributes",
            "klassName": "com.cs.config.interactor.usecase.attribute.GetAllAttributes",
            "methodName": "execute",
            "startTime": 1461338136138,
            "endTime": 1461338137154,
            "turnAroundTime": 1016,
            "executionSequence": 123,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesStrategy",
              "methodName": "execute",
              "startTime": 1461338136138,
              "endTime": 1461338137154,
              "turnAroundTime": 1016,
              "executionSequence": 124,
              "caller": 123,
              "executionStatus": "failure"
            },
            "executionStatus": "failure"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "failure"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "4d8bb76b-f070-4945-a77e-053e8d74b77c",
        "_score": 2.4321039,
        "_source": {
          "id": "4d8bb76b-f070-4945-a77e-053e8d74b77c",
          "interactor": {
            "useCase": "CreateKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.CreateKlassInstance",
            "methodName": "execute",
            "startTime": 1461338029490,
            "endTime": 1461338029845,
            "turnAroundTime": 355,
            "executionSequence": 55,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338029490,
              "endTime": 1461338029845,
              "turnAroundTime": 355,
              "executionSequence": 56,
              "caller": 55,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.runtime.strategy.elastic.ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338028927,
              "endTime": 1461338028936,
              "turnAroundTime": 9,
              "executionSequence": 54,
              "caller": 52,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "fcfc6a81-19b1-4f73-9a16-8b1dc012a589",
        "_score": 2.4321039,
        "_source": {
          "id": "fcfc6a81-19b1-4f73-9a16-8b1dc012a589",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338031859,
            "endTime": 1461338031872,
            "turnAroundTime": 13,
            "executionSequence": 57,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338029490,
              "endTime": 1461338029845,
              "turnAroundTime": 355,
              "executionSequence": 56,
              "caller": 55,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338031859,
              "endTime": 1461338031872,
              "turnAroundTime": 13,
              "executionSequence": 58,
              "caller": 57,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "02044332-4cf7-4794-bc02-698a139ac51b",
        "_score": 2.4321039,
        "_source": {
          "id": "02044332-4cf7-4794-bc02-698a139ac51b",
          "interactor": {
            "useCase": "GetKlassWithViewSettings",
            "klassName": "com.cs.config.interactor.usecase.klass.GetKlassWithViewSettings",
            "methodName": "execute",
            "startTime": 1461338031988,
            "endTime": 1461338032310,
            "turnAroundTime": 322,
            "executionSequence": 59,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338029490,
              "endTime": 1461338029845,
              "turnAroundTime": 355,
              "executionSequence": 56,
              "caller": 55,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338032301,
              "endTime": 1461338032310,
              "turnAroundTime": 9,
              "executionSequence": 61,
              "caller": 59,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "be03433e-e159-40d9-b1b3-e503009933e4",
        "_score": 2.4321039,
        "_source": {
          "id": "be03433e-e159-40d9-b1b3-e503009933e4",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338034088,
            "endTime": 1461338034099,
            "turnAroundTime": 11,
            "executionSequence": 64,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338032783,
              "endTime": 1461338032986,
              "turnAroundTime": 203,
              "executionSequence": 63,
              "caller": 62,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338034088,
              "endTime": 1461338034099,
              "turnAroundTime": 11,
              "executionSequence": 65,
              "caller": 64,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "b7986dab-b343-4a1d-b2a6-774a390f2d89",
        "_score": 2.4321039,
        "_source": {
          "id": "b7986dab-b343-4a1d-b2a6-774a390f2d89",
          "interactor": {
            "useCase": "GetAllUserGroups",
            "klassName": "com.cs.config.interactor.usecase.usergroup.GetAllUserGroups",
            "methodName": "execute",
            "startTime": 1461338034570,
            "endTime": 1461338034582,
            "turnAroundTime": 12,
            "executionSequence": 68,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338032783,
              "endTime": 1461338032986,
              "turnAroundTime": 203,
              "executionSequence": 63,
              "caller": 62,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUserGroupsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.usergroup.Neo4jGetUserGroupsStrategy",
              "methodName": "execute",
              "startTime": 1461338034570,
              "endTime": 1461338034582,
              "turnAroundTime": 12,
              "executionSequence": 69,
              "caller": 68,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "c13dbf64-e0cc-4991-a3a7-816ca0a238ef",
        "_score": 2.4321039,
        "_source": {
          "id": "c13dbf64-e0cc-4991-a3a7-816ca0a238ef",
          "interactor": {
            "useCase": "GetKlassInstance",
            "klassName": "com.cs.runtime.interactor.usecase.klassinstance.GetKlassInstance",
            "methodName": "execute",
            "startTime": 1461338045520,
            "endTime": 1461338046018,
            "turnAroundTime": 498,
            "executionSequence": 82,
            "elasticStrategy": {
              "useCase": "ElasticGetKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338045520,
              "endTime": 1461338045535,
              "turnAroundTime": 15,
              "executionSequence": 83,
              "caller": 82,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetAttributesByIdsStrategy",
              "klassName": "com.cs.config.strategy.neo4j.attribute.Neo4jGetAttributesByIdsStrategy",
              "methodName": "execute",
              "startTime": 1461338046007,
              "endTime": 1461338046018,
              "turnAroundTime": 11,
              "executionSequence": 85,
              "caller": 82,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "f6c9a2f7-6732-4e68-a9fb-8b8f0ce136c6",
        "_score": 2.4321039,
        "_source": {
          "id": "f6c9a2f7-6732-4e68-a9fb-8b8f0ce136c6",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338063095,
            "endTime": 1461338063102,
            "turnAroundTime": 7,
            "executionSequence": 88,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338060190,
              "endTime": 1461338060410,
              "turnAroundTime": 220,
              "executionSequence": 87,
              "caller": 86,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338063095,
              "endTime": 1461338063102,
              "turnAroundTime": 7,
              "executionSequence": 89,
              "caller": 88,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "263b569a-7abd-4c63-b6a3-19bb817031c0",
        "_score": 2.4321039,
        "_source": {
          "id": "263b569a-7abd-4c63-b6a3-19bb817031c0",
          "interactor": {
            "useCase": "GetAllUsers",
            "klassName": "com.cs.config.interactor.usecase.user.GetAllUsers",
            "methodName": "execute",
            "startTime": 1461338086494,
            "endTime": 1461338086501,
            "turnAroundTime": 7,
            "executionSequence": 109,
            "elasticStrategy": {
              "useCase": "ElasticCreateKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338084517,
              "endTime": 1461338085220,
              "turnAroundTime": 703,
              "executionSequence": 106,
              "caller": 105,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetUsersStrategy",
              "klassName": "com.cs.config.strategy.neo4j.user.Neo4jGetUsersStrategy",
              "methodName": "execute",
              "startTime": 1461338086494,
              "endTime": 1461338086501,
              "turnAroundTime": 7,
              "executionSequence": 110,
              "caller": 109,
              "executionStatus": "success"
            },
            "executionStatus": "Success"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "success"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "84390345-2fc1-48c9-a38a-0cc8fd6aba00",
        "_score": 2.4321039,
        "_source": {
          "id": "84390345-2fc1-48c9-a38a-0cc8fd6aba00",
          "interactor": {
            "useCase": "GetTask",
            "klassName": "com.cs.config.interactor.usecase.task.GetTask",
            "methodName": "execute",
            "startTime": 1461338137893,
            "endTime": 1461338138912,
            "turnAroundTime": 1019,
            "executionSequence": 135,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetTaskStrategy",
              "klassName": "com.cs.config.strategy.neo4j.task.Neo4jGetTaskStrategy",
              "methodName": "execute",
              "startTime": 1461338137893,
              "endTime": 1461338138912,
              "turnAroundTime": 1019,
              "executionSequence": 136,
              "caller": 135,
              "executionStatus": "failure"
            },
            "executionStatus": "failure"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "failure"
        }
      },
      {
        "_index": "applicationlogindex",
        "_type": "performanceanalysis",
        "_id": "dad394e5-378b-45fd-abb6-41f5e0cc721c",
        "_score": 2.4321039,
        "_source": {
          "id": "dad394e5-378b-45fd-abb6-41f5e0cc721c",
          "interactor": {
            "useCase": "GetAllKlasses",
            "klassName": "com.cs.config.interactor.usecase.klass.GetAllKlasses",
            "methodName": "execute",
            "startTime": 1461338149041,
            "endTime": 1461338150063,
            "turnAroundTime": 1022,
            "executionSequence": 139,
            "elasticStrategy": {
              "useCase": "ElasticSaveKlassInstanceStrategy",
              "methodName": "execute",
              "startTime": 1461338100567,
              "endTime": 1461338100742,
              "turnAroundTime": 175,
              "executionSequence": 118,
              "caller": 117,
              "executionStatus": "success"
            },
            "neo4jStrategy": {
              "useCase": "Neo4jGetKlassesStrategy",
              "klassName": "com.cs.config.strategy.neo4j.klass.Neo4jGetKlassesStrategy",
              "methodName": "execute",
              "startTime": 1461338149041,
              "endTime": 1461338150063,
              "turnAroundTime": 1022,
              "executionSequence": 140,
              "caller": 139,
              "executionStatus": "failure"
            },
            "executionStatus": "failure"
          },
          "persistTimeStamp": "2016-04-22",
          "user": "admin",
          "executionStatus": "failure"
        }
      }
    ]
  }
}